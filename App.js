import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import deepmerge from 'deepmerge';

const backgroundColor = 'ghostwhite';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const styles = getStyleSheet(darkTheme);

  return (
    <View style={styles.container}>
      <Button
          title={"Darkmode: " + darkTheme}
          onPress={() => setDarkTheme(!darkTheme)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const baseStyleSheet = {
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const lightStyleSheet = {
  container: {
    backgroundColor: backgroundColor
  },
};

const darkStyleSheet = {
  container: {
    backgroundColor: "grey"
  },
};

export function getStyleSheet(useDarkTheme){
  const theme = useDarkTheme ? darkStyleSheet : lightStyleSheet;
  return StyleSheet.create(deepmerge(baseStyleSheet, theme));
}
