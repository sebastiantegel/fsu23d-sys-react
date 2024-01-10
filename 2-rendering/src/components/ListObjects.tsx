import { Person } from "../models/Person";

export const ListObjects = () => {
  const family: Person[] = [
    new Person("Sebastian", 44, true),
    new Person("Hanna", 43, true),
    new Person("Astrid", 13, false),
    new Person("Alvar", 13, false),
  ];

  const personsHtml = family.map((person) => {
    return (
      <div className="person">
        <h3>{person.name}</h3>
        <p>{person.age}</p>
        <input type="checkbox" checked={person.isMarried} />
      </div>
    );
  });

  return <>{personsHtml}</>;
};
