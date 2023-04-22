import styled from "styled-components/native";

export const ButtonMain = styled.Button`
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 79px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.gray900};
  color: ${({ theme }) => theme.COLORS.gray300};
`;