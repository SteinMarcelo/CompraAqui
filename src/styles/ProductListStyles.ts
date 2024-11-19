import styled from "styled-components/native";
import { Text, TouchableOpacity, View } from "react-native";

export const Container = styled(View)`
  flex: 1;
  background-color: #0d0706;
  padding: 20px;
`;

export const Header = styled(Text)`
  color: #f2f2f2;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0d0706;
`;

export const CardContainer = styled(TouchableOpacity)`
  background-color: #2a2a2a;
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;
`;

export const ListContent = styled(View)`
  flex: 1;
  padding-bottom: 20px;
`;
