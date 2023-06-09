import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'


type HeaderProps = {
  healthy: boolean | null
  detail: boolean | null
}

export const Container = styled(SafeAreaView)<HeaderProps>`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 24px;
  height: ${({ healthy, detail }) => {
    if (healthy === null || detail === true) {
      return '130px'
    } else {
      return '200px'
    }
  }};
  background-color: ${({ theme, healthy, detail }) => {
    if (healthy === false || detail === false) {
      return theme.COLORS.redLight
    } else if (healthy === true || detail === true) {
      return theme.COLORS.greenLight
    } else {
      return theme.COLORS.gray400
    }
  }};
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray700};
  `}
  margin-top: -30px;
  text-align: center;
`
export const ButtonIcon = styled(TouchableOpacity)`
  height: 40px;
  width: 40px;
  justify-content: center;
  margin-top: -30px;
`
export const HeaderTitle = styled.View`
  justify-content: center;
  align-items: center;
`
export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.gray700};
  `}
`
export const Icon = styled(ArrowLeft).attrs<HeaderProps>(
  ({ theme, healthy }) => ({
    size: 36,
    color:
      healthy === true
        ? theme.COLORS.greenDark
        : healthy === false
        ? theme.COLORS.redMid
        : theme.COLORS.gray700,
  }),
)`
  align-self: center;
`