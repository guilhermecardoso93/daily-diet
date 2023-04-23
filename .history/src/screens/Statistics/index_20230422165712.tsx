import React from "react";
import { Container, TouchableOpacityGoBack, StatisticsView, SubTitle } from "./styles";

import { Percent } from "../../components/Percent";
import { ArrowLineLeft } from "phosphor-react-native";
import { StaticsField } from "../../components/StaticField";

export function Statistics() {
  return (
    <Container>
      <TouchableOpacityGoBack>
        <ArrowLineLeft  color="#639339"/>
      </TouchableOpacityGoBack>
      <Percent percent={80} />
      <StatisticsView>
        <SubTitle>Estatísticas Gerais</SubTitle>
        <StaticsField 
          subTitle="melhor sequencia de pratos dentro da dieta"
          title='fngkdsnfgkld'
          inDiet={undefined}
          
        />
      </StatisticsView>
    </Container>
  );
}
