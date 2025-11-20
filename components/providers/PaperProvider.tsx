import { useColorScheme } from "nativewind";
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
  useTheme,
} from "react-native-paper";

const light = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#3b82f6",
    onPrimary: "#ffffff",
    background: "#ffffff",
    surface: "#ffffff",
    onSurface: "#111827",
    success: "#16a34a",
  },
};

const dark = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#60a5fa",
    onPrimary: "#000000",
    background: "#111827",
    surface: "#1f2937",
    onSurface: "#f9fafb",
    success: "#16a34a",
  },
};

export type AppTheme = typeof light;

export const useAppTheme = () => useTheme<AppTheme>();

export function AppPaperProvider({ children }: any) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <PaperProvider theme={isDark ? dark : light}>{children}</PaperProvider>
  );
}
