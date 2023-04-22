import React from "react";
import { Container } from "./styles";

import { Percent } from "../../components/Percent";
import { ArrowArcLeft, ArrowLineLeft } from "phosphor-react-native";

export function Statistics() {
  return (
    <Container>
      <ArrowLineLeft />
      <Percent percent={80} />
    </Container>
  );
}
