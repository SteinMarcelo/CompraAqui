import React, { useEffect } from "react";
import { useOrderContext } from "../contexts/OrderContext";
import { Container, Title, OrderItem, BackButton, ButtonText, OrderText } from "../styles/OrderStatusStyles";
import { useNavigation } from "@react-navigation/native";

const OrderStatus = () => {
  const { orders } = useOrderContext(); // Acessa os pedidos do contexto
  const navigation = useNavigation(); // Usando a navegação

  return (
    <Container>
      {/* Botão de Voltar */}
      <BackButton onPress={() => navigation.navigate("Cart")}>
        <ButtonText>Voltar</ButtonText>
      </BackButton>

      <Title>Meus Pedidos</Title>
      {orders.length === 0 ? (
        <OrderItem>
          <OrderText>Nenhum pedido encontrado.</OrderText>
        </OrderItem>
      ) : (
        orders.map((order, index) => (
          <OrderItem key={index}>
            <OrderText>Endereço: {order.address}</OrderText>
            <OrderText>Cidade: {order.city}</OrderText>
            <OrderText>Estado: {order.state}</OrderText>
          </OrderItem>
        ))
      )}
    </Container>
  );
};

export default OrderStatus;
