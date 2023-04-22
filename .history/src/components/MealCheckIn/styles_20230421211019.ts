import styled, { css } from 'styled-components/native'
import theme from '../../theme'

type Props = {
  type: boolean
}

export const Container = styled.View`
flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  height: 49px;
  gap: 3px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray500};
  padding: 10px;
`
export const Time = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD} ;
  margin-right: 8px;
`

export const MealName = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray300};
  `}
`

export const MealStatusColor = styled.View<Props>`
 background-color: ${({ theme, type }) =>
    type === true ? theme.COLORS.greenLight : theme.COLORS.greenLight};
  border-radius: 999px;
  width: 15px;
  height: 15px;
`