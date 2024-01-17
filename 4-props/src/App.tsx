import "./App.css";
import { Furnitures } from "./components/Furnitures";
import { Furniture } from "./models/Furniture";
// import { Greeting } from "./components/Greeting";

function App() {
  const ikeaStuff: Furniture[] = [
    new Furniture("Billy", 249, true),
    new Furniture("Berså", 500, false),
    new Furniture("Skriva", 1200, true),
  ];

  return (
    <>
      {/* <Greeting greeting="Hello world" />
      <Greeting greeting="Lorem ipsum" />
      <Greeting greeting="dolor sit amet" /> */}

      <Furnitures bigThingsInHome={ikeaStuff} />
    </>
  );
}

export default App;
