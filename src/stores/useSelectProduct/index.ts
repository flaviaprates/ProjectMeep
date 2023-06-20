import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";

import { Item } from "components/Main/types";
import { State } from "./types";

export const store = (set: SetState<State>): State => {
  function setSelectProduct(selectProduct: Item | null): void {
    set({ selectProduct });
  }

  return {
    selectProduct: null,
    setSelectProduct,
  };
};

export const useSelectProduct = create<State>(
  persist(store, {
    name: "selected-item",
    getStorage: () => localStorage,
  })
);
