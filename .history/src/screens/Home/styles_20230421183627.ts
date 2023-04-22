import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.COLORS.gray400};
  align-items: center;
  justify-content: center;

  margin: 1rem;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.greenDark};
`