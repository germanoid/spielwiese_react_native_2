import React, {useContext} from 'react';
import {Button} from "react-native";
import {getThemeData} from "../context/ThemeData";

export default function MyButton(props) {
  const { onPress, title, type } = props;
  const color = getThemeData()[type];

  return (
    <Button title={title} onPress={onPress} color={color}/>
  );
}
