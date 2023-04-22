import styled, { css }  from 'styled-components/native'

export const Title = styled.Text`
  font-size:${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRABOLD};
  margin-bottom: 18px;

`