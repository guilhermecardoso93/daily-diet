import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: start;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.greenDark};
`