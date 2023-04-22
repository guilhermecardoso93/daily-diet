import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;


export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 60px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.COLORS.gray900};
`;

