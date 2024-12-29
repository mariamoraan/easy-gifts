import { FindWishesQuery } from "../application/queries/find-wishes.query";
import { WishesRepository } from "../domain/wishes.repository";
import { WishesFirebaseRepository } from "../infrastructure/wishes-firebase.repository";

export class WishesLocator {
  static getRepository(): WishesRepository {
    return new WishesFirebaseRepository();
  }
  static getFindWishesQuery() {
    return new FindWishesQuery(this.getRepository());
  }
}