import React from "react";
import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold
} from "@expo-google-fonts/nunito-sans";

import theme from "./src/theme";
import { Loading } from "./src/components/Loading";
import { Statistics } from "./src/screens/Statistics";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_800ExtraBold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <Loading />}

      <StatusBar backgroundColor="transparent" translucent />
    </ThemeProvider>
  );
}
