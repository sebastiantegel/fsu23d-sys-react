import { Beer } from "../models/Beer";

interface IShowBeerProps {
  beer: Beer;
  drinkBeer: (name: string) => void;
}

export const ShowBeer = (props: IShowBeerProps) => {
  const handleClick = () => {
    props.drinkBeer(props.beer.name);
  };

  return (
    <>
      <h4 className={props.beer.isDrunk ? "drunk" : ""}>{props.beer.name}</h4>
      <button onClick={handleClick}>Drick öl</button>
    </>
  );
};
