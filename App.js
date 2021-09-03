import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import deepmerge from 'deepmerge';

export function getPrimaryButtonColor(darkTheme){
  return darkTheme ? 'lightblue' : 'blue';
}

export function getSecondaryButtonColor(darkTheme){
  return darkTheme ? 'lightgreen' : 'green';
}

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const styles = getStyleSheet(darkTheme);

  return (
    <View style={styles.container}>
      <Button
          color={getPrimaryButtonColor(darkTheme)}
          title={"Darkmode: " + darkTheme}
          onPress={() => setDarkTheme(!darkTheme)}
      />
      <Button
          color={getSecondaryButtonColor(darkTheme)}
          title={"Secondary"}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const baseStyleSheet = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const lightStyleSheet = {
  container: {
    backgroundColor: 'ghostwhite'
  }
};

const darkStyleSheet = {
  container: {
    backgroundColor: "grey"
  }
};

export function getStyleSheet(useDarkTheme){
  const theme = useDarkTheme ? darkStyleSheet : lightStyleSheet;
  return StyleSheet.create(deepmerge(baseStyleSheet, theme));
}
