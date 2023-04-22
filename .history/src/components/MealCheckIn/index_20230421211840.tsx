import React from "react";
import { Container, Time, MealName, MealStatusColor, ViewMeal} from "./styles";

export function MealCheckIn() {
  return (
    <Container>
      <Time>20:00</Time>
      <ViewMeal>
        <MealName>X-Tudo</MealName>
        <MealStatusColor type={true} />
      </ViewMeal>
    </Container>
  );
}
