import { Item } from "components/Main/types";

export type State = {
  shoppingCart: Item[];
  setShoppingCart: (payload: Item[]) => void;
};
