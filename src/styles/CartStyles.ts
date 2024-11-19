import styled from "styled-components/native";
import { Text, Image, View, TouchableOpacity } from "react-native";

export const Container = styled(View)`
  flex: 1;
  background-color: #0d0706;
  padding: 20px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #f2f2f2;
`;

export const ItemContainer = styled(View)`
  flex-direction: row;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  padding-bottom: 10px;
`;

export const ImageProduct = styled(Image)`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

export const InfoContainer = styled(View)`
  flex: 1;
`;

export const ProductTitle = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #f2f2f2;
`;

export const ProductText = styled(Text)`
  color: #f0f0f2;
`;

export const Total = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #f2b441;
  margin-vertical: 20px;
  text-align: center;
`;

export const RemoveButton = styled(TouchableOpacity)`
  margin-top: 10px;
`;

export const FinalizeButton = styled(TouchableOpacity)`
  background-color: #f25041;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  color: #f2f2f2;
  font-weight: bold;
`;
