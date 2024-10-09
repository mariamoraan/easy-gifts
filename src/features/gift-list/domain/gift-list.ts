export interface Gift {
  id: string;
  name: string;
  pictureUrls?: string[];
  urls?: {
    label: string;
    url: string;
  }[];
  description?: string;
}

export interface GiftList {
  id: string;
  name: string;
  description?: string;
  owner: {
    userId: string;
    name: string;
    pictureUrl?: string;
  };
  gifts: Gift[];
}
