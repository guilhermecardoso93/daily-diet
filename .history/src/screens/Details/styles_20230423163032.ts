import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray600};
  position: relative;
  justify-content: center;
  align-items: center;
`
export const Body = styled.View`
  padding: 24px;
  flex: 1;
  width: 100%;
  height: 100%;
  margin-top: -20px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.COLORS.gray800};
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray300};
  `}
  margin-bottom: 12px;
`
export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.gray300};
  `}
  margin-bottom: 64px;
`
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray300};
  `}
  margin-bottom: 12px;
`
type Props = {
  inDiet: boolean
}

export const ColorCircle = styled.View<Props>`
  background-color: ${({ theme, inDiet }) =>
    inDiet === true ? theme.COLORS.gray300 : theme.COLORS.redMid};
  border-radius: 999px;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`
export const TextInDietField = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.gray300};
  `}
`
export const InDietField = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.gray400};
  border-radius: 999px;
  padding: 10px 15px;
  max-width: 60%;
`
export const ButtonsField = styled.View`
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`