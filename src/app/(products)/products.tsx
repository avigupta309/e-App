import { ThemedView } from "@/components/themed-view";
import { productsProps } from "@/type";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ProductCard from "./productCard";

interface Props {
  query: string;
}

export default function Products({ query }: Props) {
  const [products, setProducts] = useState<productsProps[]>([]);
  const [fixedProducts, setFixedProducts] = useState<productsProps[]>([]);
  // const { searchText } = UseDataContext();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setFixedProducts(response.data.products);
      } catch (error) {}
    }
    fetchProducts();
    console.log("hero");
  }, []);

  useEffect(() => {
    let filteredProducts: productsProps[] = [];
    async function fetchSearchItem() {
      if (!query.trim()) {
        console.log("we ");
        return;
      }
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        filteredProducts = response.data.products;
      } catch (error) {}
      setProducts([...filteredProducts, ...filteredProducts]);
    }

    fetchSearchItem();
  }, [query]);
  return (
    <ThemedView style={{ flex: 1 }}>
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
