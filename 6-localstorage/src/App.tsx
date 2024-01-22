import { useState } from "react";
import "./App.css";

function App() {
  const [wineBottle, setWineBottle] = useState(
    JSON.parse(localStorage.getItem("wine") || "[]")
  );

  const handleClick = () => {
    localStorage.setItem("name", "Sebastian");

    const wine = [
      {
        name: "Lynx",
        country: "USA",
        year: 2018,
      },
    ];
    // Fel sätt
    //localStorage.setItem("wine", wine);

    // Rätt sätt
    localStorage.setItem("wine", JSON.stringify(wine));
  };

  const getFromLs = () => {
    const name = localStorage.getItem("name");

    if (name) console.log(name);
    else console.log("Hittade inget i ls");

    const wine = localStorage.getItem("wine");

    if (wine) {
      const wineAsObject = JSON.parse(wine);

      console.log(wineAsObject);
      setWineBottle(wineAsObject);
    }
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Lägg till i localStorage</button>
      </div>
      <div>
        <button onClick={getFromLs}>Hämta från localStorage</button>
      </div>

      <div>{wineBottle[0]?.name}</div>
    </>
  );
}

export default App;
