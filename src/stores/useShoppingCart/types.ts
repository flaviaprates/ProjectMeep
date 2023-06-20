import { Item } from "components/Main/types";

export type ShoppingCart = Item[];

export type State = {
  shoppingCart: ShoppingCart;
  setShoppingCart: (payload: ShoppingCart) => void;
};
