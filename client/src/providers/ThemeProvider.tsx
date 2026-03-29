import { type ReactNode, type FC, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"Light" | "Dark">("Light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
