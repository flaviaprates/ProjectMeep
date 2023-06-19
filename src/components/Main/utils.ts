import { ResultsData } from "services/main/types";

export const handleData = (data: ResultsData) => {
  return data.map((it, index) => ({
    ...it,
    price: Number((Math.random() * (100 - 10) + 10).toFixed(2)),
    description: "Descrição",
    index,
  }));
};
