import { Person } from "../models/Person";

export const ObjectInterpolation = () => {
  //   const me = {
  //     name: "Sebastian",
  //     age: 44,
  //     isMarried: true,
  //   };

  const myself = new Person("Sebastian", 44, true);

  return (
    <div>
      <h3>{myself.name}</h3>
      <p>{myself.age}</p>
      <input type="checkbox" checked={myself.isMarried} />
    </div>
  );
};
