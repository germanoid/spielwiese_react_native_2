import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeContext";

const defaultTheme = "light";

const themeData = {
    "light": {
        primary: "blue",
        secondary: "green",
        background: "ghostwhite"
    },
    "dark": {
        primary: "lightblue",
        secondary: "lightgreen",
        background: "grey"
    },
};

export function getThemeData() {
  const [theme] = useContext(ThemeContext);
  const themeSet = themeData[theme];

  return themeSet ? themeSet : themeData[defaultTheme];
}
