import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'


type HeaderProps = {
  healthy: boolean | null
  detail: boolean | null
}

export const Container = styled(SafeAreaView)<HeaderProps>`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 60px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.COLORS.gray900};
`;

