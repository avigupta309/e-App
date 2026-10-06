import { ThemedView } from "@/components/themed-view";
import { UseDataContext } from "@/hooks/contextApi";
import { productsProps } from "@/type";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Header } from "../components/Header";
import ProductCard from "../components/productCard";

export default function Products() {
  const [products, setProducts] = useState<productsProps[]>([]);
  const [fixedProducts, setFixedProducts] = useState<productsProps[]>([]);
  const {searchText} = UseDataContext();

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
      if (!searchText.trim()) {
        console.log("we");
        return;
      }
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${searchText}`,
        );
        filteredProducts = response.data.products;
      } catch (error) {}
      setProducts([...filteredProducts, ...fixedProducts]);
    }

    fetchSearchItem();
  }, [searchText]);
  return (
    <ThemedView style={{ flex: 1 }}>
      <Header />
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
