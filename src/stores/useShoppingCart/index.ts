import create, { SetState } from "zustand";

import { Item } from "components/Main/types";
import { State } from "./types";

export const useShoppingCart = create<State>((set: SetState<State>) => {
  function setShoppingCart(shoppingCart: Item[]): void {
    set({ shoppingCart });
  }

  return {
    shoppingCart: [],
    setShoppingCart,
  };
});
