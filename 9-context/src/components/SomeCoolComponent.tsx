import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

export const SomeCoolComponent = () => {
  const currentValue = useContext(MyContext);

  return <>{currentValue}</>;
};
