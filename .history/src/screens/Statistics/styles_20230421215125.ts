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
  margin-top: 20px;
`

export const TouchableOpacityGoBack = styled.TouchableOpacity`
  margin-left: 10px;
`
