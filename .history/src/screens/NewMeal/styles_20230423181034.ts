import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.gray900};
  width: 100%;
`
type HealthyProps = {
  healthy: boolean | null
}

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 130px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.gray800};
`
export const CircleColor = styled.View<HealthyProps>`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-right: 5px;
  background-color: ${({ theme, healthy }) =>
    healthy ? theme.COLORS.greenDark : theme.COLORS.redDark};
`
export const Body = styled.View`
  padding: 24px;
  align-items: center;
  flex: 1;
  width: 100%;
  margin-top: -20px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.COLORS.gray500};
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray700};
  `}
  margin-top: -20px;
  margin-left: -40px;
  flex: 1;
  text-align: center;
`
export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray700};
  `}
`
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.white};
  `}
  margin-bottom: 10px;
`
export const Line = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex: 1;
`
export const ColumnRight = styled.View`
  margin-right: 10px;
  flex: 1;
`
export const ColumnLeft = styled.View`
  margin-left: 10px;
  flex: 1;
`
export const Form = styled.ScrollView`
  flex: 1;
  width: 100%;
`
export const ButtonForm = styled(TouchableOpacity)<HealthyProps>`
  flex-direction: row;
  height: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, healthy }) => {
    switch (healthy) {
      case false:
        return theme.COLORS.redLight
      case true:
        return theme.COLORS.greenLight
      default:
        return theme.COLORS.gray300
    }
  }};
  border-radius: 8px;
`
export const ButtonDate = styled(TouchableOpacity)`
  flex-direction: row;
  max-height: 60px;
  flex: 1;
  padding: 10px 15px;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.gray300};
`
export const TextError = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.redMid};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-top: 5px;
  margin-bottom: 14px;
`