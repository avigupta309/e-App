import { StyleProp, ViewStyle } from "react-native";
import { LucideIcon } from "lucide-react-native";

import { ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

type ThemedIconProps = {
  icon: LucideIcon;
  size?: number;
  type?: ThemeColor;
  style?: StyleProp<ViewStyle>;
};

export function ThemedIcon({
  icon: Icon,
  size = 20,
  type = "text",
}: ThemedIconProps) {
  const theme = useTheme();

  return <Icon size={size} color={theme[type]} />;
}
