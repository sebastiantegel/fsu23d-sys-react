import { createContext } from "react";

export interface ITheme {
  backroundColor: string;
  foregroundColor: string;
  name: string;
  toggleTheme: () => void;
}

export interface IThemes {
  night: ITheme;
  day: ITheme;
}

export const themes: IThemes = {
  night: {
    foregroundColor: "white",
    backroundColor: "black",
    name: "Night",
    toggleTheme: () => {},
  },
  day: {
    foregroundColor: "maroon",
    backroundColor: "ivory",
    name: "Day",
    toggleTheme: () => {},
  },
};

export const ThemeContext = createContext<ITheme>(themes.day);
