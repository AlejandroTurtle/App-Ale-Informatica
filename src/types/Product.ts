export type Product = {
  id: number;
  name: string;
  price: string;
  photos: string[];
  description: string;
  category: string | null;
};

export type Banner = {
  id: number;
  photo: string;
  category: string | null;
};
