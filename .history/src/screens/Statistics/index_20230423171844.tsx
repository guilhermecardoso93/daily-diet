import React, { useState } from "react";
import { Container, SubTitle, Body, Line } from "./styles";

import { StaticsField } from "../../components/StaticField";
import { useNavigation } from "@react-navigation/native";
import { useMealHistory } from "../../hooks/useMealHistory";
import { Alert } from "../../components/Alert";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Statistics() {
  const { percentFit, resetAll } = useMealHistory();
  const [openAlert, setOpenAlert] = useState(false);

  async function handleRemoveAllHistory() {
    setOpenAlert(false);
    await resetAll();
    handleGoHome();
  }

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.goBack();
  }

  return (
    <Container>
      {openAlert && (
        <Alert
          buttonOk={handleRemoveAllHistory}
          buttonCancel={() => setOpenAlert(false)}
          title="Você que realmente deletar todo o histórico!"
        />
      )}
      <Header title={`${percentFit.percent}%`} healthy={percentFit.percent} />
      <Body>
        <SubTitle>General stats</SubTitle>
        <StaticsField
          title="59"
          subTitle="Melhor sequencia de pratos da dieta"
        />
        <StaticsField
          title={`${percentFit.total}`}
          subTitle="Registrar Refeição"
        />

        <Line>
          <StaticsField
            title={`${percentFit.inDiet}`}
            subTitle="Refeição dentro da dieta"
            inDiet="green"
          />
          <StaticsField
            title={`${percentFit.total - percentFit.inDiet}`}
            subTitle="Refeição dora da dieta"
            inDiet="red"
          />
        </Line>
        <Button
          onPress={() => setOpenAlert(true)}
          title="Remover do Histórico"
        />
      </Body>
    </Container>
  );
}
