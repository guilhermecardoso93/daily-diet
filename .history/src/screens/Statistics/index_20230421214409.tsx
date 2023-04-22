import React from "react";
import { Container } from "./styles";

import { Percent } from "../../components/Percent";
import { ArrowArcLeft } from "phosphor-react-native";

export function Statistics() {
  return (
    <Container>
      <ArrowArcLeft />
      <Percent percent={80} />
    </Container>
  );
}
