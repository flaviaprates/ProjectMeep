import { handleCountTotalItem } from "./utils";

const mockData = [
  {
    description: "Descrição",
    image: "/static/media/charmeleon.3d173b4b9318256d9ad8.png",
    index: 4,
    name: "charmeleon",
    numberItens: 1,
    obs: "",
    totalPrice: 18,
    unitPrice: 18,
    url: "https://pokeapi.co/api/v2/pokemon/5/",
  },
  {
    description: "Descrição",
    image: "/static/media/ivysaur.9277e9da5bbd2c5a6a6d.png",
    index: 1,
    name: "ivysaur",
    numberItens: 3,
    obs: "",
    totalPrice: 54,
    unitPrice: 18,
    url: "https://pokeapi.co/api/v2/pokemon/2/",
  },
  {
    description: "Descrição",
    image: "/static/media/venusaur.3a016392d5119ce605f2.png",
    index: 2,
    name: "venusaur",
    numberItens: 2,
    obs: "",
    totalPrice: 36,
    unitPrice: 18,
    url: "https://pokeapi.co/api/v2/pokemon/3/",
  },
];

describe(`utils`, () => {
  test(`handleCountTotalItem`, () => {
    const data = handleCountTotalItem(mockData);
    expect(data).toBe(6);
  });
});
