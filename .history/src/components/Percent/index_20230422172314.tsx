import React from "react";
import {
  ArrowUpRightIcon,
  Container,
  PercentTypeStyleProps,
  Subtitle,
  Title,
  TouchableOpacityArrowButton,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  percent: number;
  icon?: boolean;
};

export function Percent({ percent, icon, ...rest }: Props) {
  const type: PercentTypeStyleProps = percent >= 65 ? "primary" : "secondary";

  return (
    <Container typeColor={type} {...rest}>
      <Title>{percent}%</Title>
      <TouchableOpacityArrowButton>
        {icon === true ? <ArrowUpRightIcon /> : null}
      </TouchableOpacityArrowButton>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
