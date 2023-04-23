import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home";
import { Statistics } from "../screens/Statistics";
import { NewMeal } from "../screens/NewMeal";
import React from "react";
import { Details } from "../screens/Details";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="statistics" component={Statistics} />

      <Screen name="details" component={Details} />

      <Screen name="newMeal" component={NewMeal} />
    </Navigator>
  );
}
