import styled from "styled-components/native";
import { TextInput, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0d0706;
  padding: 10px;
`;

export const Title = styled(Text)`
  color: #f2f2f2;
  font-size: 26px;
  font-weight: bold;
`;

export const Input = styled(TextInput)`
  width: 100%;
  height: 50px;
  margin-vertical: 12px;
  border-width: 1px;
  padding: 10px;
  color: #fff;
  border-color: #f25041;
`;

export const Button = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  background-color: #f25041;
  justify-content: center;
  align-items: center;
  margin-vertical: 12px;
`;

export const ButtonText = styled(Text)`
  color: #f2f2f2;
`;
