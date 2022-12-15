import request, { gql } from "graphql-request";
import React, { FunctionComponent } from "react";
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import { EntryPointContainer } from "./EntryPointContainer";
import { PokemonsProps } from "./Pokemons";

const query = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link to={"pockemons"}>Pock</Link>,
  },
  {
    path: "pockemons",
    element: (
      <EntryPointContainer
        entrypoint={{
          component: React.lazy<FunctionComponent<PokemonsProps>>(() =>
            import("./Pokemons").then(({ Pokemons }) => ({ default: Pokemons }))
          ),
          fetch: (variables) =>
            request("https://graphql-pokemon2.vercel.app", query, variables),
          variables: { first: 5 },
        }}
      />
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
