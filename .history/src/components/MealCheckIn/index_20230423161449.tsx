import React from "react";
import { Container, Time, MealName, MealStatusColor, VerticalLine } from "./styles";
import { TouchableOpacityProps } from "react-native";
import moment from 'moment'
import { ProductItemDTO } from "../../dtos/ProductItemDTO";

type MealCheckInProps = TouchableOpacityProps & {
  item: ProductItemDTO
}


export function MealCheckIn({ item, ...rest }: MealCheckInProps) {
  return (
    <Container type={item.inDiet} {...rest}>
      <Time>{`${moment(item.data).format('HH:mm')}`}</Time>
      <VerticalLine></VerticalLine>
      <MealName>{item.name}</MealName>
      <MealStatusColor type={item.inDiet} />
    </Container>
  );
}
