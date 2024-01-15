import { ChangeEvent, FormEvent, useState } from "react";
import { Snus } from "../models/Snus";

export const CreateSnus = () => {
  const [snus, setSnus] = useState<Snus>(new Snus("", 0, 0, 0));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target);
    // console.log(e.target.value);
    if (e.target.type === "text") {
      setSnus({ ...snus, [e.target.name]: e.target.value });
    }
    if (e.target.type === "number") {
      setSnus({ ...snus, [e.target.name]: +e.target.value });
    }
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    console.log("Snus:", snus);
  };

  return (
    <>
      <div>{JSON.stringify(snus)}</div>
      <form onSubmit={handleSave}>
        <input
          type="text"
          value={snus.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="number"
          value={snus.price}
          onChange={handleChange}
          name="price"
        />
        <input
          type="number"
          value={snus.strength}
          onChange={handleChange}
          name="strength"
        />
        <input
          type="number"
          value={snus.amount}
          onChange={handleChange}
          name="amount"
        />
        <button>Spara</button>
      </form>
    </>
  );
};
