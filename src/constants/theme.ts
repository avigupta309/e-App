/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// import "@/global.css";
import { Platform } from "react-native";

export const Colors = {
  light: {
    text: "#111827",
    background: "#F8FAFC",

    backgroundElement: "#FFFFFF",
    backgroundSelected: "#EEF2FF",

    textSecondary: "#64748B",

    primary: "#4F46E5",
    primaryLight: "#EEF2FF",
    primaryDark: "#4338CA",

    border: "#E2E8F0",
    borderLight: "#F1F5F9",

    success: "#16A34A",
    warning: "#F59E0B",
    error: "#DC2626",

    price: "#111827",
    discount: "#DC2626",
    rating: "#F59E0B",

    overlay: "rgba(15, 23, 42, 0.08)",
  },

  dark: {
    text: "#F8FAFC",
    background: "#0F172A",

    backgroundElement: "#1E293B",
    backgroundSelected: "#312E81",

    textSecondary: "#94A3B8",

    primary: "#818CF8",
    primaryLight: "#1E1B4B",
    primaryDark: "#A5B4FC",

    border: "#334155",
    borderLight: "#1E293B",

    success: "#4ADE80",
    warning: "#FBBF24",
    error: "#F87171",

    price: "#F8FAFC",
    discount: "#F87171",
    rating: "#FBBF24",

    overlay: "rgba(0, 0, 0, 0.25)",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
