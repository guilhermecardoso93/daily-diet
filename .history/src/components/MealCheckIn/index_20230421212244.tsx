import React from "react";
import { Container, Time, MealName, MealStatusColor, VerticalLine } from "./styles";

export function MealCheckIn() {
  return (
    <Container>
      <Time>20:00</Time>
      <VerticalLine></VerticalLine>
      <MealName>X-Tudo</MealName>
      <MealStatusColor type={true} />
    </Container>
  );
}
