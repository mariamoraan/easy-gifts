import { UserId } from "../../../auth/domain/entities/user-id";

export interface WishLink {
  name: string;
  url: string;
}

export interface Wish {
  id: string;
  name: string;
  description?: string;
  links?: WishLink[];
  imagesUrls?: string[];
  owner: UserId;
}
