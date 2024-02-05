import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface IButtonProps {
  children: string;
  handleClick?: () => void;
}

export const Button = ({ children, handleClick }: IButtonProps) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: currentTheme.backroundColor,
        color: currentTheme.foregroundColor,
      }}
    >
      {children}
    </button>
  );
};
