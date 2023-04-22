import React from "react";
import { Container, SubTitle } from "./styles";
import { Button } from "../Button/Index";


export function Meals() {
  return (
    <Container >
      <SubTitle>
        Refeiçãoes
      </SubTitle>
      <Button 
        title='Nova Refeição'
        icon={true}
        color="gray"
        />
    </Container>
  );
}
