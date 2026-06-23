import { products } from "@/mocks/products";
import { formatCurrency } from "@/utils/formatCurrency";
import { FlatList, Image } from "react-native";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";
import { AddToCartButton, Product, ProductDetails, Separator } from "./styles";

export function Menu() {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item._id}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <Product>
          <Image
            source={{
              uri: `http://localhost:3001/uploads/1781084162147-pizza-4-queijos.jpg`,
            }}
            style={{ width: 120, height: 96, borderRadius: 8 }}
          />

          <ProductDetails>
            <Text weight="600">{item.name}</Text>
            <Text color="#666" size={14} style={{ marginVertical: 8 }}>
              {item.description}
            </Text>
            <Text weight="600" size={14}>
              {formatCurrency(item.price)}
            </Text>
          </ProductDetails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
