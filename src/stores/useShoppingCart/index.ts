import create, { SetState } from "zustand";

import { persist } from "zustand/middleware";
import { ShoppingCart, State } from "./types";

export const store = (set: SetState<State>): State => {
  function setShoppingCart(shoppingCart: ShoppingCart): void {
    set({ shoppingCart });
  }

  return {
    shoppingCart: [],
    setShoppingCart,
  };
};

export const useShoppingCart = create<State>(
  persist(store, {
    name: "cart-store",
    getStorage: () => localStorage,
  })
);
