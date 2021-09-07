import React, { createContext, useState, useContext } from "react";
import {StyleSheet, View} from "react-native";
import {ThemeContext} from "./ThemeContext";

const styles = StyleSheet.create({
    base: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    light: {
        backgroundColor: "ghostwhite"
    },
    dark: {
        backgroundColor: "grey"
    },
});

export default function StyleWrapper({ children }) {
  const [theme] = useContext(ThemeContext);

  return (
    <View style={[styles.base, theme === "dark" ? styles.dark : styles.light]}>{children}</View>
  );
}
