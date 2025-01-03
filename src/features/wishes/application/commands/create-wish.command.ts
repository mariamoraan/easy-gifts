import { Wish } from "../../domain/entities/wish.entity";
import { WishesRepository } from "../../domain/wishes.repository";

export class CreateWishCommand {
  constructor(private readonly wishesRepository: WishesRepository) {}
  handle(wish: Omit<Wish, "id">) {
    return this.wishesRepository.createWish(wish);
  }
}
