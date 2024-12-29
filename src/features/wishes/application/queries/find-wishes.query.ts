import { WishesRepository } from "../../domain/wishes.repository";
export class FindWishesQuery {
  constructor(private readonly wishesRepository: WishesRepository) {}
  handle() {
    return this.wishesRepository.findWishes();
  }
}
