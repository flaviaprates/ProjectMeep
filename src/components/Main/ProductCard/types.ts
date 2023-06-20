import { Item } from "../types";

export type ProductCardProps = {
  item: Item;
  image: string;
  name: string;
  price: number;
  description?: string;
};
