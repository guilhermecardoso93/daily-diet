import React from "react";
import { Container, SubTitle } from "./styles";
import { Button } from "../Button";
import { DateText } from "../DateText";
import { MealCheckIn } from "../MealCheckIn";
import { ScrollView, View } from "react-native";

export function Meals() {
  return (
    <Container>
      <SubTitle>Refeições</SubTitle>
      <Button title="Nova Refeição" icon={true} color="gray" />
      <View>
        <DateText date="12.08.23" />
        <MealCheckIn />
      </View>
      <View>
        <DateText date="13.08.23" />
        <MealCheckIn />
      </View>
    </Container>
  );
}
