import { Font } from "@/constants/font";
import { useTheme } from "@/hooks/use-theme";
import { ActivityIndicator, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";
import { Spacing } from "@/constants/theme";

export default function LoadingAnimated() {
  const theme = useTheme();
  return (
    <ThemedView style={styles.loading}>
      <ActivityIndicator size="large" color={theme.primary} />

      <ThemedText
        themeColor="textSecondary"
        style={[
          styles.loadingText,
          {
            fontFamily: Font.Medium,
          },
        ]}
      >
        Loading product...
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.two,
  },
  loadingText: {
    fontSize: 14,
  },
});