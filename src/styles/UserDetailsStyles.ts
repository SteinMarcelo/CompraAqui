import styled from "styled-components/native";
import { Text, Image, TouchableOpacity } from "react-native";

// Container principal da tela
export const Container = styled.View`
  flex: 1;
  background-color: #0d0706;
  padding: 20px;
  align-items: center;
`;

// Avatar do usuário
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

// Nome do usuário
export const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #f0f0f2;
  margin-bottom: 10px;
`;

// Email do usuário
export const UserEmail = styled.Text`
  font-size: 16px;
  color: #91e9f2;
  margin-bottom: 20px;
`;

// Botão de logout
export const LogoutButton = styled(TouchableOpacity)`
  background-color: #f25041;
  border-radius: 8px;
  width: 80%;
  padding: 12px;
  margin-top: 20px;
  align-items: center;
`;

// Título para a aba de pedidos
export const OrdersTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #f0f0f2;
  margin-top: 20px;
  text-align: center;
`;

// Botão "Ver Pedidos"
export const ViewOrdersButton = styled(TouchableOpacity)`
  background-color: #f25041;
  border-radius: 8px;
  width: 80%;
  padding: 12px;
  margin-top: 10px;
  align-items: center;
`;

// Estilo para o texto do botão
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
