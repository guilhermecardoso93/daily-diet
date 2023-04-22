import React from "react";
import { Container, Logo, Avatar } from "./styles";

import LogoSvg from "../../assets/logo.svg";
import AvatarImg from "../../assets/avatar.jpg";

export function Header() {
  return (
    <Container>
      <Logo source={LogoSvg} />
      <Avatar source={AvatarImg} />
    </Container>
  );
}
