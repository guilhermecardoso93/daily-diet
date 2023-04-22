import React from "react";
import { Container } from "./styles";
import { Button } from "../Button/Index";


export function Meals() {
  return (
    <Container >
      <Button 
        title='Nova Refeição'
        icon={true}
        color="gray"
        />
    </Container>
  );
}
