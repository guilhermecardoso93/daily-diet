import React from "react";
import {
  Container,
  TouchableOpacityGoBack,
  StatisticsView,
  SubTitle,
  StaticsFieldView
} from "./styles";

import { Percent } from "../../components/Percent";
import { ArrowLineLeft } from "phosphor-react-native";
import { StaticsField } from "../../components/StaticField";

export function Statistics() {
  return (
    <Container>
      <TouchableOpacityGoBack>
        <ArrowLineLeft color="#639339" />
      </TouchableOpacityGoBack>
      <Percent percent={80}/>
      <StatisticsView>
        <SubTitle>Estatísticas Gerais</SubTitle>
        <StaticsField
          subTitle="melhor sequencia de pratos dentro da dieta"
          title="22"
          inDiet={undefined}
        />
        <StaticsField
          subTitle="refeições registradas"
          title="109"
          inDiet={undefined}
        />
        <StaticsFieldView>
          <StaticsField
            subTitle="refeições dentro da dieta"
            title="99"
            inDiet="green"
          />
          <StaticsField
            subTitle="refeições fora da dieta"
            title="10"
            inDiet="red"
          />
        </StaticsFieldView>
      </StatisticsView>
    </Container>
  );
}
