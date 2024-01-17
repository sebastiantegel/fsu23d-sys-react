import { Furniture } from "../models/Furniture";

interface IFurniturePresentationProps {
  furniture: Furniture;
}

export const FurniturePresentation = (props: IFurniturePresentationProps) => {
  return (
    <div>
      <h3>{props.furniture.name}</h3>
      <p>{props.furniture.price}</p>
      <input type="checkbox" checked={props.furniture.easyToAssembly} />
    </div>
  );
};
