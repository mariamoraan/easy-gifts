import { WishesRepository } from "../../domain/wishes.repository";
export class FindWishQuery {
  constructor(private readonly wishesRepository: WishesRepository) {}
  handle(id: string) {
    return this.wishesRepository.findWish(id);
  }
}
