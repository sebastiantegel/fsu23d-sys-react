import { Furniture } from "../models/Furniture";
import { FurniturePresentation } from "./FurniturePresentation";

interface IFurnituresProps {
  bigThingsInHome: Furniture[];
}

export const Furnitures = (props: IFurnituresProps) => {
  return (
    <>
      {props.bigThingsInHome.map((furniture) => {
        return <FurniturePresentation furniture={furniture} />;
      })}
    </>
  );
};
