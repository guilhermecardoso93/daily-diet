import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'

export const Container = styled.View`
  flex: 1;
  margin-bottom: 24px;
  border: 1px solid #DDDEDF;
  border-radius: 6px;
`
export const InputText = styled(TextInput)`
  flex: 1;
  min-width: 56px;
  padding: 16px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.gray300};
    color: ${theme.COLORS.gray700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.redMid};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-top: 5px;
  margin-bottom: -14px;
`
