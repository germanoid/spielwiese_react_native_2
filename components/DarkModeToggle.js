import React, {useContext} from 'react';
import MyButton from "./MyButton"
import {ThemeContext} from "../context/ThemeContext";

export default function DarkModeToggle() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <MyButton
      title={"toggle theme"}
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      type={"primary"}
    />
  );
}
