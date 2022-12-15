import { FunctionComponent } from "react";
export type PokemonsProps = {
    pokemons: {
      id: "string";
      number: "string";
      name: "string";
      weight: {
        minimum: "string";
        maximum: "string";
      };
      height: {
        minimum: "string";
        maximum: "string";
      };
      classification: "string";
      types: ["string"];
      resistant: ["string"];
      weaknesses: ["string"];
      fleeRate: "number";
      maxCP: "integer";
      maxHP: "integer";
      image: "string";
    }[];
};

export const Pokemons: FunctionComponent<PokemonsProps> = ({ pokemons }) => {
  return <div>{JSON.stringify(pokemons)}</div>;
};
