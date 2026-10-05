import { DataContextProvider } from "@/hooks/contextApi";
import { useFonts } from "expo-font";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
    Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
    Black: require("../../assets/fonts/SF-Pro-Display-Black.otf"),
    Heavy: require("../../assets/fonts/SF-Pro-Display-Heavy.otf"),
    Light: require("../../assets/fonts/SF-Pro-Display-Light.otf"),
    Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
    SemiBold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
    Thin: require("../../assets/fonts/SF-Pro-Display-Thin.otf"),
    UltraThin: require("../../assets/fonts/SF-Pro-Display-Ultralight.otf"),
  });
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <DataContextProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(products)" />
        </Stack>
      </DataContextProvider>
    </ThemeProvider>
  );
}
