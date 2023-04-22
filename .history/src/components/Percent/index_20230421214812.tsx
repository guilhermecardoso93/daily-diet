import React from "react";
import {
  ArrowUpRightIcon,
  Container,
  PercentTypeStyleProps,
  Subtitle,
  Title,
} from "./styles";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  percent: number;
};

export function Percent({ percent, ...rest }: Props) {
  const type: PercentTypeStyleProps = percent >= 65 ? "primary" : "secondary";
  
  return (
    <Container typeColor={type} {...rest}>
      <TouchableOpacity>
        <ArrowUpRightIcon />
      </TouchableOpacity>
      <Title>{percent}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
