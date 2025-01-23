import { Wish } from "./entities/wish.entity";

export interface WishesRepository {
  findWishes: () => Promise<Wish[]>;
  findWish: (id: string) => Promise<Wish | undefined>;
  createWish: (wish: Omit<Wish, "id">) => Promise<void>;
}
