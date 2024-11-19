import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useCartContext } from "../contexts/CartContext";
import {
  Container,
  Title,
  ItemContainer,
  ImageProduct,
  InfoContainer,
  ProductTitle,
  ProductText,
  Total,
  FinalizeButton,
  ButtonText,
  RemoveButton,
} from "../styles/CartStyles";
import { Alert, FlatList } from "react-native";

const Cart = () => {
  const { cart, removeProduct } = useCartContext();
  const navigation = useNavigation();

  // Calcula o valor total dos itens
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // Função para finalizar a compra
  const handleFinalizePurchase = () => {
    if (cart.length === 0) {
      Alert.alert(
        "Carrinho vazio",
        "Adicione produtos ao carrinho antes de prosseguir."
      );
      return;
    }
    navigation.navigate("Payment");
  };

  return (
    <Container>
      <Title>Meu Carrinho</Title>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.product.id.toString()}
        renderItem={({ item }) => (
          <ItemContainer>
            <ImageProduct source={{ uri: item.product.image }} />
            <InfoContainer>
              <ProductTitle>{item.product.title}</ProductTitle>
              <ProductText>Quantidade: {item.quantity}</ProductText>
              <ProductText>
                Preço: R$ {(item.product.price * item.quantity).toFixed(2)}
              </ProductText>
              <RemoveButton onPress={() => removeProduct(item.product.id)}>
                <ButtonText>Remover</ButtonText>
              </RemoveButton>
            </InfoContainer>
          </ItemContainer>
        )}
      />
      <Total>Total: R$ {totalAmount.toFixed(2).replace(".", ",")}</Total>
      <FinalizeButton onPress={handleFinalizePurchase}>
        <ButtonText>Finalizar Compra</ButtonText>
      </FinalizeButton>
    </Container>
  );
};

export default Cart;
