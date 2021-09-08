import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const value = useState("dark");

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
