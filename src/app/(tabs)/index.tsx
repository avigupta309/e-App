import { ThemedView } from "@/components/themed-view";
import { HeaderScreen } from "@/features/Header";
import Products from "../(products)/products";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomePage() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderScreen />
        <Products />
      </SafeAreaView>
    </ThemedView>
  );
}
