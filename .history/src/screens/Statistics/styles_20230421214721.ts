import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.COLORS.gray300};
  width: 100%;
  position: relative;
  justify-content: flex-start;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.greenDark};
`