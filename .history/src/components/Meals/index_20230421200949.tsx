import React from "react";
import { Container, SubTitle } from "./styles";
import { Button } from "../Button";
import { DateText } from "../DateText";


export function Meals() {
  return (
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
        
    </Container>
  );
}
