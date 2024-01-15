import { useState } from "react";
import { Snus } from "../models/Snus";

export const ObjectsInState = () => {
  const [snuses, setSnuses] = useState<Snus[]>([
    new Snus("General", 60, 5, 10),
    new Snus("LD - Vit", 40, 3, 15),
  ]);

  // Lägg till
  const addSnus = () => {
    setSnuses([...snuses, new Snus("Siberia", 80, 6, 7)]);
  };

  // Ta bort
  const removeSnus = (name: string) => {
    // console.log("Ta bort:", name);

    setSnuses(snuses.filter((snus) => snus.name !== name));
  };

  // Ta en snus
  const handleClick = (name: string) => {
    console.log("Ta en snus av:", name);
    setSnuses(
      snuses.map((snus) => {
        if (snus.name === name) {
          return { ...snus, amount: snus.amount - 1 };
        } else {
          return snus;
        }
      })
    );
  };

  return (
    <>
      <button onClick={addSnus}>Lägg till</button>
      <ul>
        {snuses.map((snus) => {
          return (
            <li key={snus.name}>
              <h4>{snus.name}</h4>
              <p>{snus.amount}</p>
              <button
                onClick={() => {
                  handleClick(snus.name);
                }}
              >
                Ta snus
              </button>
              <button
                onClick={() => {
                  removeSnus(snus.name);
                }}
              >
                Ta bort
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
