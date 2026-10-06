import { Stack } from "expo-router";

export default function ProductsLayout() {
  return (
    <Stack screenOptions={{title:"Product Details"}}>
      <Stack.Screen  name="[id]" />
      <Stack.Screen name="Home" />
    </Stack>
  );
}
