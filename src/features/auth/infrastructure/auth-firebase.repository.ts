import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { AuthRepository } from "../domain/auth.repository";
import { Credentials } from "../domain/entities/credentials";
import { getFirestore } from "firebase/firestore";
import { app } from "../../../core/firebase/setup";
import { UserInfo } from "../domain/entities/user-info";
import { User } from "../domain/entities/user";

export class AuthFirebaseRepository implements AuthRepository {
  private auth = getAuth();
  private db = getFirestore(app);

  constructor() {
    setPersistence(this.auth, browserLocalPersistence);
  }

  public async onAuthChangeSubscriber(
    onChange: (user: string | undefined) => Promise<void>
  ) {
    onAuthStateChanged(this.auth, async (auth) => {
      if (auth) {
        const { uid } = auth;
        await onChange(uid);
      } else {
        await onChange(undefined);
      }
    });
  }

  public async signup(
    user: UserInfo,
    credentials: Credentials
  ): Promise<User | undefined> {
    const userCredential = await createUserWithEmailAndPassword(
      this.auth,
      user.email,
      credentials.password
    );
    await setDoc(doc(this.db, "users", userCredential.user.uid), {
      name: user.name,
      email: user.email,
    });
    const currentUser: User = {
      id: userCredential.user.uid,
      name: user.name,
      email: user.email,
    };
    return currentUser;
  }

  private async getUserById(userId: string): Promise<User | undefined> {
    const docRef = doc(this.db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const currentUser: User = {
        id: docSnap.id,
        name: data.name,
        email: data.email,
      };
      return currentUser;
    } else {
      return undefined;
    }
  }

  public async getLoggedUser(): Promise<User | undefined> {
    const userUID = this?.auth?.currentUser?.uid ?? undefined;
    if (!userUID) return undefined;
    const currentUser = await this.getUserById(userUID);
    return currentUser;
  }

  public async login(credentials: Credentials): Promise<User | undefined> {
    const userCredential = await signInWithEmailAndPassword(
      this.auth,
      credentials.email,
      credentials.password
    );
    const currentUser = await this.getUserById(userCredential.user.uid);
    return currentUser;
  }
  public async logout(): Promise<void> {
    signOut(this.auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
      });
  }

  public async resetPassword(email: string): Promise<void> {
    await sendPasswordResetEmail(this.auth, email);
  }
}
