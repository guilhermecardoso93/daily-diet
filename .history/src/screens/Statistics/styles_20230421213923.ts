import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 24px;
  gap: 10px;
  background-color: ${({ theme }) => theme.COLORS.greenDark}
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.greenDark};
`