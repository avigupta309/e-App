import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "../(Product)/Home";
export default function HomePage() {
  const [query, setQuery] = useState<string>("");
  return (
    <ThemedView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </ThemedView>
  );
}
