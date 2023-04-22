import React from "react";
import { Container, SubTitle } from "./styles";
import { Button } from "../Button";
import { DateText } from "../DateText";
import { MealCheckIn } from "../MealCheckIn";
import { ScrollView } from "react-native";


export function Meals() {
  return (
   <ScrollView>
    <Container >
      <SubTitle>
        Refeições
      </SubTitle>
      <Button 
        title='Nova Refeição'
        icon={true}
        color="gray"
        />
        <DateText 
          date='12.08.23'
        />
        <MealCheckIn />
    </Container>
    </ScrollView> 
  );
}
