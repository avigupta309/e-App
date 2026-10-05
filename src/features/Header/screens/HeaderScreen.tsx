import { ThemedIcon } from "@/components/themed-icon";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { Search } from "lucide-react-native";
import { StyleSheet, TextInput, useColorScheme } from "react-native";
import { UserProfile } from "../components/User";

export function HeaderScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === "dark" ? "dark" : "light"];

  return (
    <ThemedView style={styles.container}>
      <UserProfile />
      <ThemedView
        style={[
          styles.searchContainer,
          {
            backgroundColor: colors.backgroundElement,
            borderColor: colors.border,
          },
        ]}
      >
        <ThemedIcon icon={Search} size={19} type="textSecondary" />

        <TextInput
          placeholder="Search products or categories"
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, { color: colors.text }]}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingRight: 20,

  },

  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },

  searchContainer: {
    flex: 1,
    height: 44,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
  },
});
