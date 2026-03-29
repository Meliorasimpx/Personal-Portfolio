import { createContext } from "react";

type ThemeContextType = {
  theme: "Light" | "Dark";
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
