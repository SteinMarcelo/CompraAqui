import React from "react";
import { useRoute } from "@react-navigation/native";
import { ProductDTO } from "../types/Product";
import { useCartContext } from "../contexts/CartContext";
import {
  Container,
  Title,
  ProductImage,
  Description,
  Price,
  ButtonContainer,
  AddToCartButton,
  ButtonText,
} from "../styles/ProductDetailsStyles";

const ProductDetails = () => {
  const route = useRoute();
  const { item } = route.params as { item: ProductDTO };
  const { addProduct } = useCartContext();

  return (
    <Container>
      <Title>{item.title}</Title>
      <ProductImage
        source={{
          uri: item.image,
        }}
      />
      <Description>{item.description}</Description>
      <Price>Preço: R${item.price.toFixed(2).replace('.',',')}</Price>
      <ButtonContainer>
        <AddToCartButton onPress={() => addProduct(item)}>
          <ButtonText>Adicionar ao Carrinho</ButtonText>
        </AddToCartButton>
      </ButtonContainer>
    </Container>
  );
};

export default ProductDetails;
