import styled from "styled-components/native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

// Container principal da tela
export const Container = styled(View)`
  flex: 1;
  background-color: #0d0706;
  padding: 20px;
  justify-content: center;
`;

// Título da tela
export const Title = styled(Text)`
  font-size: 32px;
  font-weight: bold;
  color: #f0f0f2;
  margin-bottom: 40px;
  text-align: center;
`;

// Input personalizado
export const Input = styled(TextInput)`
  background-color: #f2f2f2;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 15px;
  padding-left: 15px;
  font-size: 16px;
  color: #0d0706;
`;

// Botão principal
export const Button = styled(TouchableOpacity)`
  background-color: #f25041;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  margin-top: 20px;
`;

// Texto do botão
export const ButtonText = styled(Text)`
  color: #f2f2f2;
  font-weight: bold;
  font-size: 18px;
`;
