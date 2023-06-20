import Blastoise from "assets/products/blastoise.png";
import Bulbasaur from "assets/products/bulbasaur.png";
import Charizard from "assets/products/charizard.png";
import Charmander from "assets/products/charmander.png";
import Charmeleon from "assets/products/charmeleon.png";
import Ivysaur from "assets/products/ivysaur.png";
import Pokeball from "assets/products/pokeball.png";
import Squirtle from "assets/products/squirtle.png";
import Venusaur from "assets/products/venusaur.png";
import Wartortle from "assets/products/wartortle.png";
import { ResponseData } from "services/main/types";

export const getProductImage = (name: string) => {
  switch (name) {
    case `bulbasaur`:
      return Bulbasaur;
    case `ivysaur`:
      return Ivysaur;
    case `venusaur`:
      return Venusaur;
    case `charmander`:
      return Charmander;
    case `charmeleon`:
      return Charmeleon;
    case `charizard`:
      return Charizard;
    case `squirtle`:
      return Squirtle;
    case `wartortle`:
      return Wartortle;
    case `blastoise`:
      return Blastoise;
    default:
      return Pokeball;
  }
};

export const handleData = (data: ResponseData) => {
  return data.map((it, index) => ({
    ...it,
    price: 18,
    description: "Descrição",
    image: getProductImage(it.name),
    obs: "",
    numberItens: 0,
    index,
  }));
};
