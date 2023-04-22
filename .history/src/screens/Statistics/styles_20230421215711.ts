import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.COLORS.greenLight};
  width: 100%;
  position: relative;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const TouchableOpacityGoBack = styled.TouchableOpacity`
  margin: 20px;
`;

export const StatisticsView = styled.View`
  padding: 24px;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  margin-top: -20px;
  border-radius: 32px;
  border-top-right-radius: 20px;
  border-top-left-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.white};
`;
