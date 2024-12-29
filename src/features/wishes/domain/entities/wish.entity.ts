export interface WishLink {
  name: string;
  url: string;
}

export interface Wish {
  id: string;
  name: string;
  description?: string;
  links?: WishLink[];
  imageUrls?: string[];
}
