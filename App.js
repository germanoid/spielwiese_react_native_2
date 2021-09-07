import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {ThemeProvider, ThemeContext} from "./ThemeContext";
import MyButton from "./components/MyButton"
import DarkModeToggle from "./components/DarkModeToggle"
import StyleWrapper from "./StyleWrapper"

export default function App() {
  return (
    <ThemeProvider>
      <StyleWrapper>
        <DarkModeToggle />
        <MyButton
          title={"A Secondary button"}
          type={"secondary"}
        />
        <StatusBar style="auto" />
      </StyleWrapper>
    </ThemeProvider>
  );
}
