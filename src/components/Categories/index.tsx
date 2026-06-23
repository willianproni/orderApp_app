import { categories } from "@/mocks/categories";
import { useState } from "react";
import { FlatList } from "react-native";
import { Text } from "../Text";
import { Category, Icon } from "./styles";

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  function handleSelectCategory(categoryId: string) {
    setSelectedCategory((prev) => (prev === categoryId ? null : categoryId));
  }

  return (
    <FlatList
      data={categories}
      horizontal
      contentContainerStyle={{ paddingRight: 24 }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item._id;

        return (
          <Category onPress={() => handleSelectCategory(item._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{item.icon}</Text>
            </Icon>

            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {item.name}
            </Text>
          </Category>
        );
      }}
    />
  );
}
