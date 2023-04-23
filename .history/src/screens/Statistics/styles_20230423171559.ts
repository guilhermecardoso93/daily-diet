import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.gray700};
  width: 100%;
  position: relative;
  justify-content: center;
`
export const Body = styled.View`
  padding: 24px;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  margin-top: -20px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.COLORS.gray600};
  position: relative;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray900};
  `}
`
export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.gray900};
  `}
`
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.white};
  `}
  margin-bottom: 24px;
`
export const Line = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 90px;
  flex: 1;
`