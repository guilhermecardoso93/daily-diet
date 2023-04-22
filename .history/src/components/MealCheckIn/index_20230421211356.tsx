import React from "react";
import { Container, Time, MealName, MealStatusColor } from "./styles";

export function MealCheckIn() {
  return (
    <Container>
      <Time>20:00</Time> 
      <MealName> X-Tudo</MealName>
      <MealStatusColor 
        type={true}
      />
    </Container>
  );
}
