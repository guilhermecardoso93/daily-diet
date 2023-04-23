import styled, { css } from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
type TitleProps = {
  inDiet: boolean
}

export const Title = styled.Text<TitleProps>`
  ${({ theme, inDiet }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${inDiet ? theme.COLORS.greenDark : theme.COLORS.orange700};
  `}
  margin-bottom: 15px;
  text-align: center;
  width: 100%;
`
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.gray300};
  `}
  text-align: center;
  margin-bottom: 24px;
`
export const WorkoutImg = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 256,
  color: theme.COLORS.gray300,
}))``
