import { Stack } from "expo-router";

export default function ProductsLayout() {
  return (
    <Stack screenOptions={{ title: "Details Of Products" }}>
      <Stack.Screen name="products" />
      <Stack.Screen name="productCard" />
      <Stack.Screen name="(ProductInfo)" />
    </Stack>
  );
}
