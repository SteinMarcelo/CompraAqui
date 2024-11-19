import styled from "styled-components/native";

// Paleta de cores tema escuro
const backgroundColor = "#1E1E1E"; // Fundo escuro
const primaryTextColor = "#91E9F2"; // Azul claro
const secondaryTextColor = "#F2B441"; // Amarelo
const buttonColor = "#F25041"; // Vermelho
const lightBackground = "#F0F0F2"; // Cor clara
const priceColor = "#28a745"; // Cor verde para o preço

export const Container = styled.View`
  flex-direction: row;
  background-color: ${lightBackground};
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
  padding: 15px;
  margin-bottom: 15px;
  align-items: center;
`;

export const ImageStyled = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 15px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${backgroundColor};
  margin-bottom: 10px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${priceColor};
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${buttonColor};
  padding-vertical: 8px;
  padding-horizontal: 15px;
  border-radius: 5px;
  align-items: center;
`;

export const ButtonDetails = styled.TouchableOpacity`
  background-color: ${primaryTextColor};
  padding-vertical: 8px;
  padding-horizontal: 15px;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;
