import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { Wish } from "../domain/entities/wish.entity";
import { WishesRepository } from "../domain/wishes.repository";
import { app } from "../../../core/firebase/setup";
import { getAuth } from "firebase/auth";

export class WishesFirebaseRepository implements WishesRepository {
  private db = getFirestore(app);
  private auth = getAuth();

  public async createWish(wish: Omit<Wish, "id">): Promise<void> {
    await addDoc(collection(this.db, "wishes"), wish);
  }
  public async findWishes(): Promise<Wish[]> {
    const wishes: Wish[] = [];
    if (!this.auth.currentUser?.uid) return wishes;
    const q = query(
      collection(this.db, "wishes"),
      where("owner", "==", this.auth.currentUser?.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      wishes.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        links: data.links,
        imagesUrls: data.imagesUrls,
        owner: data.owner,
        creationDate: data.creationDate,
      });
    });
    return wishes;
  }

  public async findWish(id: string): Promise<Wish | undefined> {
    const docRef = doc(this.db, "wishes", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const wish: Wish = {
        id: docSnap.id,
        name: data.name,
        description: data.description,
        links: data.links,
        imagesUrls: data.imagesUrls,
        owner: data.owner,
        creationDate: data.creationDate,
      };
      return wish;
    } else {
      return undefined;
    }
  }
}
