import React from "react";
import { Container, Logo, Avatar } from "./styles";
import { useNavigation } from "@react-navigation/native";

import LogoPng from "../../assets/logo.png";
import AvatarImg from "../../assets/avatar.jpg";


type HeaderProps = {
  title: string;
  healthy?: number | null;
  detail?: boolean | null;
};


export function Header({ title, healthy = null, detail = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  const healthyBoolean = healthy !== null && healthy > 65;
  return (
    <Container>
      <Logo source={LogoPng} />
      <Avatar source={AvatarImg} />
    </Container>
  );
}
