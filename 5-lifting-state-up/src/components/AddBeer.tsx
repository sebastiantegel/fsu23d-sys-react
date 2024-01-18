import { ChangeEvent, useState } from "react";

interface IAddBeerProps {
  addBeer: (theNewBeerName: string) => void;
}

export const AddBeer = (props: IAddBeerProps) => {
  const [newBeerName, setNewBeerName] = useState("");

  const handleClick = () => {
    props.addBeer(newBeerName);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewBeerName(e.target.value);
  };

  return (
    <>
      <input type="text" value={newBeerName} onChange={handleChange} />
      <button onClick={handleClick}>Spara</button>
    </>
  );
};
