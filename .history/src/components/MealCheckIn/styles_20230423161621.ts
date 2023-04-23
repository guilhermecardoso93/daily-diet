import styled, { css } from "styled-components/native";
import theme from "../../theme";
import { TouchableOpacity } from "react-native";

type Props = {
  type: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 49px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
   
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray500};

  padding: 0px 16px;
  gap: 3px;
  margin-bottom: 5px;
`;

export const Time = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  margin-right: 8px;
`;

export const MealName = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray700};
  `};
`;

export const MealStatusColor = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === true ? theme.COLORS.greenLight : theme.COLORS.greenLight};
  border-radius: 999px;
  width: 15px;
  height: 15px;
`;

export const VerticalLine = styled.View`
  height:14px;
  border: 0.5px solid ${({ theme }) => theme.COLORS.gray600};
  margin:0 10px ;
`;