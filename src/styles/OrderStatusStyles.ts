import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

// Paleta de cores fornecida adaptada para tema escuro
const backgroundColor = "#1E1E1E"; // Fundo escuro
const primaryTextColor = "#91E9F2"; // Azul claro
const secondaryTextColor = "#F2B441"; // Amarelo
const buttonColor = "#F25041"; // Vermelho

export const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${primaryTextColor};
  margin-bottom: 20px;
`;

export const OrderItem = styled.View`
  background-color: #2A2A2A; /* Cor de fundo mais escura para os itens */
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid #444;
`;

export const BackButton = styled(TouchableOpacity)`
  background-color: ${buttonColor};
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled(Text)`
  color: ${primaryTextColor};
  font-size: 16px;
`;

export const OrderText = styled(Text)`
  color: ${secondaryTextColor};
  font-size: 16px;
  margin-top: 5px;
`;
