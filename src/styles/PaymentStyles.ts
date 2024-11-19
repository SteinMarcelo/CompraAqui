import styled from "styled-components/native";
import { TextInput, Text, TouchableOpacity, View } from "react-native";

export const Container = styled(View)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #0d0706;
  padding: 20px;
`;

export const Title = styled(Text)`
  color: #f2f2f2;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Section = styled(View)`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled(Text)`
  color: #f2f2f2;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Input = styled(TextInput)`
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: #2a2a2a;
  color: #f2f2f2;
  border-radius: 5px;
  border-width: 1px;
  border-color: #f25041;
  margin-bottom: 10px;
`;

export const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const CityInput = styled(Input)`
  width: 48%;
`;

export const StateInput = styled(Input)`
  width: 48%;
`;

export const ExpiryInput = styled(Input)`
  width: 48%;
`;

export const CvvInput = styled(Input)`
  width: 48%;
`;

export const Card = styled(View)`
  width: 100%;
  padding: 15px;
  background-color: #2a2a2a;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const CardNumber = styled(Text)`
  color: #f2f2f2;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardName = styled(Text)`
  color: #f2f2f2;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const CardRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardExpiry = styled(Text)`
  color: #f2f2f2;
  font-size: 16px;
`;

export const CardCvv = styled(Text)`
  color: #f2f2f2;
  font-size: 16px;
`;

export const Button = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  background-color: #f25041;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ButtonText = styled(Text)`
  color: #f2f2f2;
  font-size: 18px;
  font-weight: bold;
`;
