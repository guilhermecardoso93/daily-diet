import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type PercentTypeStyleProps = 'primary' | 'secondary'

type Props = {
  typeColor: PercentTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, typeColor }) =>
    typeColor === 'primary'
      ? theme.COLORS.greenLight
      : theme.COLORS.greenMid};
  padding: 16px 16px 30px;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
  justify-content: flex-start;
  margin-top: 20px;
`;



export const TouchableOpacityArrowButton = styled.TouchableOpacity`
  margin: 10px;
`;




export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray900};
  `}
  margin-top: -15px;
  text-align: center;
  width: 100%;
`
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.gray700};
  `}
  text-align: center;
  width: 100%;
`
export const ArrowUpRightIcon = styled(ArrowUpRight).attrs<Props>(
  
  ({ theme, typeColor }) => ({
    size: 24,
      weight: 'bold',
    color:
      typeColor === 'secondary'
        ? theme.COLORS.greenMid
        : theme.COLORS.greenDark,
    
  }),
)``