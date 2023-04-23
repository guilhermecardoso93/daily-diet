import styled, { css } from 'styled-components/native'

type Props = {
  inDiet: 'green' | 'red' | null
}

export const Container = styled.View<Props>`
  align-items: center;
  padding: 5px;
  background-color: ${({ theme, inDiet }) => {
    switch (inDiet) {
      case 'red':
        return theme.COLORS.redLight
      case 'green':
        return theme.COLORS.greenLight
      default:
        return theme.COLORS.gray500
    }
  }};
  flex: 1;
  width: 100%;
  max-height: 90px;
  min-height: 90px;
  justify-content: center;
  border-radius: 12px;
  margin: 0
    ${({ inDiet }) => {
      switch (inDiet) {
        case 'red':
          return 0
        default:
          return 10
      }
    }}px
    24px
    ${({ inDiet }) => {
      switch (inDiet) {
        case 'green':
          return 0
        default:
          return 10
      }
    }}px;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray900};
  `}
`
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray700};
  `}
  text-align: center;
`