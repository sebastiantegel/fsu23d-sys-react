import { useState } from "react";
import { Snus } from "../models/Snus";

export const ObjectInState = () => {
  const [snus, setSnus] = useState<Snus>(new Snus("General", 60, 5, 10));

  const handleClick = () => {
    setSnus({ ...snus, amount: snus.amount - 1 });
    // snus.amount--  ->   snus.amount = snus.amount - 1
    // snus.amount - 1   ->   9
  };

  const handleBuySnus = () => {
    setSnus(new Snus("LD - Vit", 40, 3, 15));
  };

  return (
    <div>
      {snus.amount > 0 ? (
        <>
          <h4>{snus.name}</h4>
          <p>{snus.amount}</p>
          <button onClick={handleClick}>Ta snus</button>
        </>
      ) : (
        <>
          <button onClick={handleBuySnus}>Köp snus</button>
        </>
      )}
    </div>
  );
};
