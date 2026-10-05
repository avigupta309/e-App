import { ThemedIcon } from "@/components/themed-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import { LogIn, LogOut, User } from "lucide-react-native";
import { useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";

export function UserProfile() {
  const theme = useTheme();

  const [visible, setVisible] = useState(false);

  return (
    <ThemedView>
      <Pressable
        onPress={() => setVisible((prev) => !prev)}
        style={[
          styles.profileButton,
          { backgroundColor: theme.backgroundElement },
        ]}
      >
        <ThemedIcon icon={User} size={21} type="textSecondary" />
      </Pressable>

      {visible && (
        <ThemedView
          style={[
            styles.dropdown,
            {
              backgroundColor: theme.backgroundElement,
              borderColor: theme.border,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={[
              styles.dropdownItem,
              {
                backgroundColor: theme.backgroundElement,
              },
            ]}
          >
            <ThemedIcon icon={LogIn} size={18} type="textSecondary" />
            <ThemedText>Sign In</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={[
              styles.dropdownItem,

              { backgroundColor: theme.backgroundElement },
            ]}
          >
            <ThemedIcon icon={LogOut} size={18} type="textSecondary" />
            <ThemedText>Sign Out</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },

  dropdown: {
    position: "absolute",
    top: 52,
    right: 0,
    width: 150,
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 6,
    zIndex: 100,
    elevation: 5,
    left: 5,
  },

  dropdownItem: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
