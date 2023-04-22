import React from "react";
import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
