import { Item } from "components/Main/types";

export const handleShoppingCart = (data: Item[]) => {
  const sum = data
    .reduce(function calculo(accumulator, totalValue) {
      return accumulator + totalValue.price;
    }, 0)
    .toFixed(2)
    .replace(".", ",");
  return {
    sum,
    items: data.map((it) => ({
      ...it,
    })),
  };
};
