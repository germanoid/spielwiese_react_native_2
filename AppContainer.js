import React, { createContext, useState, useContext } from "react";
import {StyleSheet, View} from "react-native";
import {getThemeData} from "./context/ThemeData";

function getStyle() {
  const backgroundColor = getThemeData()["background"]
  return StyleSheet.create({
      container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: backgroundColor
      }
  });
}

export default function AppContainer({ children }) {
  return (
    <View style={getStyle().container}>{children}</View>
  );
}
