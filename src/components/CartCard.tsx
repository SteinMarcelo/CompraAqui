import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ProductDTO } from "../types/Product";

interface CartItens {
  item: ProductDTO;
}

const CartCard = ({ item }: CartItens) => {
  return (
    <View>
      <Text>{item.title}</Text>
      <Image
        style={styles.item}
        source={{
          uri: item.image,
        }}
      />
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    width: 250,
    height: 250,
  },
});
