import { CreateWishCommand } from "../application/commands/create-wish.command";
import { FindWishQuery } from "../application/queries/find-wish.query";
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
  static getCreateWishCommand() {
    return new CreateWishCommand(this.getRepository());
  }
  static getFindWishQuery() {
    return new FindWishQuery(this.getRepository());
  }
}
