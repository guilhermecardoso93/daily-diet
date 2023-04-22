import React from "react";
import { Container, TouchableOpacityGoBack, StatisticsView, SubTitle } from "./styles";

import { Percent } from "../../components/Percent";
import { ArrowLineLeft } from "phosphor-react-native";

export function Statistics() {
  return (
    <Container>
      <TouchableOpacityGoBack>
        <ArrowLineLeft  color="#639339"/>
      </TouchableOpacityGoBack>
      <Percent percent={80} />
      <StatisticsView>
        <SubTitle>General stats</SubTitle>
      </StatisticsView>
    </Container>
  );
}
