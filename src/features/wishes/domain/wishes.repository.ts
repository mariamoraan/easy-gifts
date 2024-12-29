import { Wish } from "./entities/wish.entity";

export interface WishesRepository {
  findWishes: () => Promise<Wish[]>;
}
