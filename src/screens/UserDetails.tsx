// UserDetails.tsx
import React from "react";
import { useUserContext } from "../contexts/UserContext";
import { useNavigation } from "@react-navigation/native"; // Verifique se está sendo usado corretamente
import {
  Container,
  Avatar,
  UserName,
  UserEmail,
  LogoutButton,
  ViewOrdersButton,
  ButtonText,
} from "../styles/UserDetailsStyles";
import OrderStatus from "./OrderStatus";

const UserDetails = () => {
  const { userData, handleLogout } = useUserContext();
  const navigation = useNavigation();

  const handleNavigateToOrders = () => {
    // Navegar para a tela OrderStatus dentro do CartStack
    navigation.navigate("OrderStatus");
  };

  return (
    <Container>
      <Avatar
        source={{
          uri: userData?.user.avatar,
        }}
      />
      <UserName>
        {userData?.user.fname ?? ""} {userData?.user.lname ?? ""}
      </UserName>
      <UserEmail>{userData?.user.email ?? ""}</UserEmail>
      <ViewOrdersButton onPress={handleNavigateToOrders}>
        <ButtonText>Ver Pedidos</ButtonText>
      </ViewOrdersButton>
      <LogoutButton onPress={handleLogout}>
        <ButtonText>Sair</ButtonText>
      </LogoutButton>
    </Container>
  );
};

export default UserDetails;
