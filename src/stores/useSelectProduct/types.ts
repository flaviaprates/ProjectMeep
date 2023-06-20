import { Item } from "components/Main/types";

export type State = {
  selectProduct: Item | null;
  setSelectProduct: (payload: Item | null) => void;
};
