import React, { createContext, useState, useContext } from "react";
import {StyleSheet, View} from "react-native";
import {ThemeContext} from "./ThemeContext";
import deepmerge from "deepmerge";

export default function StyleWrapper({ children }) {
  const [theme] = useContext(ThemeContext);
  const styles = getStyleSheet(theme);

  return (
    <View style={styles.container}>{children}</View>
  );
}

const baseStyleSheet = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
};

const lightStyleSheet = {
  container: {
    backgroundColor: "ghostwhite"
  }
};

const darkStyleSheet = {
  container: {
    backgroundColor: "grey"
  }
};

export function getStyleSheet(activeTheme) {
  const theme = activeTheme === 'dark' ? darkStyleSheet : lightStyleSheet;
  return StyleSheet.create(deepmerge(baseStyleSheet, theme));
}
