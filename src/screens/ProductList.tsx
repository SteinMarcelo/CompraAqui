import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ActivityIndicator, FlatList } from "react-native";
import { ProductDTO } from "../types/Product";
import ProductCard from "../components/ProductCard";
import {
  Container,
  Header,
  LoadingContainer,
  CardContainer,
  ListContent,
} from "../styles/ProductListStyles";

type ProductStackParamList = {
  Product: undefined;
  Details: { item: ProductDTO };
};

type ProductListNavigationProp = NativeStackNavigationProp<
  ProductStackParamList,
  "Product",
  "Details"
>;

const ProductList = () => {
  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<ProductListNavigationProp>();

  const fetchData = async () => {
    try {
      const response = await axios.get<ProductDTO[]>(
        "https://fakestoreapi.com/products"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Falha ao buscar dados", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#F25041" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Header>Produtos Disponíveis</Header>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardContainer
            onPress={() => navigation.navigate("Details", { item })}
          >
            <ProductCard item={item} />
          </CardContainer>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Container>
  );
};

export default ProductList;