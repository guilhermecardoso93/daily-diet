import styled, { css } from 'styled-components/native'
import theme from '../../theme'


export const Container = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 10px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray500};
`
export const Time = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  margin-bottom: 8px;

`
