import React from "react";
import { Container } from "./styles";

import { Percent } from "../../components/Percent";

export function Statistics() {
  return (
    <Container>
      <Percent percent={80} />
    </Container>
  );
}
