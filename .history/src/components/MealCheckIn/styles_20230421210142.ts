import styled from 'styled-components/native'
import theme from '../../theme'


export const Container = styled.View`
  width: 100%;
  align-items: flex-start;
  gap: 20px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray500};
`
export const Time = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  margin-bottom: 8px;

`

export const MealName = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  margin-bottom: 8px;

`

export const MealStatusColor = styled.View`
  width: 24px%;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.greenLight};
`