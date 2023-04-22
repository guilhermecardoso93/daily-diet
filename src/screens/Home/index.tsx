import React from "react";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";
import { Meals } from "../../components/Meals";

export function Home() {
  return (
    <Container>
      <Header />
      <Percent percent={80}/>
      <Meals />
    </Container>
  );
}
