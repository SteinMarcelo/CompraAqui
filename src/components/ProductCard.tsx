import React from "react";
import { ProductDTO } from "../types/Product";
import { useCartContext } from "../contexts/CartContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Container, ImageStyled, InfoContainer, Title, Price, Button, ButtonText, ButtonDetails } from "../styles/ProductCardStyles";

interface CardItens {
  item: ProductDTO;
}

type ProductStackParamList = {
  Product: undefined;
  Details: { item: ProductDTO };
};

type ProductListNavigationProp = NativeStackNavigationProp<ProductStackParamList, "Product", "Details">;

const ProductCard = ({ item }: CardItens) => {
  const { addProduct } = useCartContext();
  const navigation = useNavigation<ProductListNavigationProp>();

  return (
    <Container>
      <ImageStyled source={{ uri: item.image }} />
      <InfoContainer>
        <Title numberOfLines={2}>{item.title}</Title>
        <Price>R$ {item.price.toFixed(2).replace(".", ",")}</Price>
        <ButtonDetails onPress={() => navigation.navigate("Details", { item })}>
          <ButtonText>Ver Detalhes</ButtonText>
        </ButtonDetails>
        <Button onPress={() => addProduct(item)}>
          <ButtonText>Adicionar ao Carrinho</ButtonText>
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default ProductCard;
