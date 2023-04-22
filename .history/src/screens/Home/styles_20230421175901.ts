import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  backgroundColor: ${({ theme}) => theme.COLORS.gray400};
  alignItems: center;
  justifyContent: center;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.greenDark};
`