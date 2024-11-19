import styled from "styled-components/native";
import { Text, Image, TouchableOpacity, View } from "react-native";

export const Container = styled(View)`
  flex: 1;
  background-color: #0d0706;
  padding: 20px;
`;

export const Title = styled(Text)`
  color: #f2f2f2;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Description = styled(Text)`
  color: #f0f0f2;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Price = styled(Text)`
  color: #f2b441;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled(View)`
  align-items: center;
  margin-top: 20px;
`;

export const AddToCartButton = styled(TouchableOpacity)`
  background-color: #f25041;
  padding: 15px 30px;
  border-radius: 5px;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  color: #f2f2f2;
  font-size: 16px;
  font-weight: bold;
`;
