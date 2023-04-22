import React from "react";
import { Container, TouchableOpacityGoBack } from "./styles";

import { Percent } from "../../components/Percent";
import { ArrowLineLeft } from "phosphor-react-native";

export function Statistics() {
  return (
    <Container>
      <TouchableOpacityGoBack>
        <ArrowLineLeft  color="639339"/>
      </TouchableOpacityGoBack>
      <Percent percent={80} />
    </Container>
  );
}
