import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.greenDark};
`