import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Plus } from 'phosphor-react-native'

type Props = {
  colorBg?: 'red' | 'teal' | 'off' | 'gray'
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  min-height: 56px;
  border: ${({ theme, colorBg }) => {
    if (colorBg === 'off') {
      return `2px solid ${theme.COLORS.gray300}`
    } else {
      return 'none'
    }
  }};
  background-color: ${({ theme, colorBg }) => {
    if (colorBg === 'red') {
      return theme.COLORS.redLight
    } else if (colorBg === 'teal') {
      return theme.COLORS.greenLight
    } else if (colorBg === 'off') {
      return 'transparent'
    } else {
      return theme.COLORS.gray800
    }
  }};
  flex-direction: row;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

export const Title = styled.Text<Props>`
  color: ${({ theme, colorBg }) => {
    if (colorBg === 'off') {
      return theme.COLORS.gray300
    } else {
      return theme.COLORS.gray300
    }
  }};
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const IconPlus = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.gray300,
  weight: 'bold',
}))`
  margin-right: 5px;
`