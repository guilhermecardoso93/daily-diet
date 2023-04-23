import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Statistics } from "../screens/Statistics";
import { NewMeal } from "../screens/NewMeal";
import React from "react";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="statistics" component={Statistics} />

      <Screen name="createAndEditionMeals" component={NewMeal} />
    </Navigator>
  );
}
