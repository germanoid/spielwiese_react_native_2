import React, {useContext} from 'react';
import {Button} from "react-native";
import {ThemeContext} from "../context/ThemeContext";

export function getPrimaryButtonColor(theme) {
  return theme === "dark" ? "lightblue" : "blue";
}

export function getSecondaryButtonColor(theme) {
  return theme === "dark" ? "lightgreen" : "green";
}

export function getButtonColor(theme, type) {
  return type === "primary" ? getPrimaryButtonColor(theme) : getSecondaryButtonColor(theme);
}

export default function MyButton(props) {
  const { onPress, title, type } = props;
  const [theme] = useContext(ThemeContext);
  return (
    <Button title={title} onPress={onPress} color={getButtonColor(theme, type)}/>
  );
}
