import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {ThemeProvider, ThemeContext} from "./context/ThemeContext";
import MyButton from "./components/MyButton"
import DarkModeToggle from "./components/DarkModeToggle"
import AppContainer from "./AppContainer"

export default function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <DarkModeToggle />
        <MyButton
          title={"A Secondary button"}
          type={"secondary"}
        />
        <StatusBar style="auto" />
      </AppContainer>
    </ThemeProvider>
  );
}
