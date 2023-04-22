import React from "react";
import { Container, Logo } from "./styles";

import LogoSvg from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <Logo source={LogoSvg}/>
    </Container>
  )
}