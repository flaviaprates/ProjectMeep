import { Item } from "components/Main/types";

export const handleCountTotalItem = (data: Item[]) => {
  return data.reduce(function calculo(accumulator, totalValue) {
    return accumulator + totalValue.numberItens;
  }, 0);
};
