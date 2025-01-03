import { Wish } from "./entities/wish.entity";

export interface WishesRepository {
  findWishes: () => Promise<Wish[]>;
  createWish: (wish: Omit<Wish, "id">) => Promise<void>;
}
