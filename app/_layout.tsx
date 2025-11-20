import { AddExpenseFab } from "@/components/add-expense/add-expense-fab";
import { AppPaperProvider } from "@/components/providers/PaperProvider";
import { Stack, usePathname, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ChevronLeft } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import React, { useEffect } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native-paper";
import "../global.css";
export const ColorModeContext = React.createContext({});

const capitalize = (str: string) => {
  return str
    .replace(/components\/(.*?)\/index/, "$1")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};
const CustomBackButton = () => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.back();
      }}
      className="web:ml-2 ios:-ml-2 android:mr-4 py-2 pr-4 pl-2"
    >
      <ChevronLeft />
    </Pressable>
  );
};

export default function RootLayout() {
  const { colorScheme, setColorScheme } =
    useColorScheme();

  useEffect(() => {
    setColorScheme("light");
  }, []);
  const pathname = usePathname();
  return (
    <>
      <StatusBar
        style="auto" //android
        backgroundColor={`${colorScheme == "light" ? "#F6F6F6" : "#272625"}`}
      />
      <ColorModeContext.Provider value={{ colorScheme }}>
        <AppPaperProvider>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#000",
              },
              headerShadowVisible: false,
              contentStyle: {
                backgroundColor:
                  colorScheme === "light" ? "#FFFFFF" : "#121212",
                borderTopWidth: 1,
                borderTopColor: colorScheme === "light" ? "#E6E6E6" : "#414141",
              },
              headerLeft: ({ canGoBack }) =>
                canGoBack ? <CustomBackButton /> : null,
              headerTitle: (props) => {
                return (
                  <Text className="text-typography-900 text-xl font-bold">
                    {capitalize(pathname.split("/").pop() || "")}
                  </Text>
                );
              },
            }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", title: "Modal" }}
            />
          </Stack>
          <AddExpenseFab />
        </AppPaperProvider>
      </ColorModeContext.Provider>
    </>
  );
}
