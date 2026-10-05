import { ThemedView } from "@/components/themed-view";
import { productsProps } from "@/type";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ProductCard  from "./productCard";

export default function Products() {
  const [products, setProducts] = useState<productsProps[]>();
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {}
    }
    fetchProducts();
  }, []);
  return (
    <ThemedView style={{ flex: 1,  }}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={{
          padding: 16,
          gap: 16,
        }}
        columnWrapperStyle={{
          gap: 16,
        }}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}
