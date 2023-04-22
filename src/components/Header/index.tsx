import React from "react";
import { Container, Logo, Avatar } from "./styles";

import LogoPng from "../../assets/logo.png";
import AvatarImg from "../../assets/avatar.jpg";

export function Header() {
  return (
    <Container>
      <Logo source={LogoPng} />
      <Avatar source={AvatarImg} />
    </Container>
  );
}
