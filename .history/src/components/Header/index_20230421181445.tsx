import React from "react";

import { Image } from "react-native";
import { Container } from "./styles";

import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <Image source={Logo}/>
    </Container>
  )
}