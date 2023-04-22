import React from "react";
import { Container, Text } from "./styles";
import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";

export function Home() {
  return (
    <Container>
      <Percent percent={80}/>
    </Container>
  );
}
