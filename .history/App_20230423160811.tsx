import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
} from "@expo-google-fonts/nunito-sans";

import theme from "./src/theme";
import { Loading } from "./src/components/Loading";
import { MealHistoryContextProvider } from "./src/hooks/useMealHistory";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
  });

  return (
    <ThemeProvider theme={theme}>
      <MealHistoryContextProvider>
        {fontsLoaded ? <Home /> : <Loading />}
      </MealHistoryContextProvider>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
