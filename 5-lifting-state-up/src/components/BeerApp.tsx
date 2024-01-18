import { useState } from "react";
import { ShowBeer } from "./ShowBeer";
import { Beer } from "../models/Beer";
import { AddBeer } from "./AddBeer";

export const BeerApp = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  const changeBeer = (name: string) => {
    setBeers(
      beers.map((beer) => {
        if (beer.name === name) {
          return { ...beer, isDrunk: true };
        } else {
          return beer;
        }
      })
    );
  };

  const addANewBeer = (theNewBeerName: string) => {
    setBeers([...beers, new Beer(theNewBeerName, false)]);
  };

  return (
    <>
      <h2>Beer App</h2>
      <AddBeer addBeer={addANewBeer} />
      {beers.map((beer) => {
        return <ShowBeer beer={beer} drinkBeer={changeBeer} key={beer.name} />;
      })}
    </>
  );
};
