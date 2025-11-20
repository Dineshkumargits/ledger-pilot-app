import { Tabs } from "expo-router";
import React, { useMemo } from "react";

import { AddExpenseFab } from "@/components/add-expense/add-expense-fab";
import { HapticTab } from "@/components/haptic-tab";
import { TAB_BAR_HEIGHT } from "@/lib/utils/constants";
import {
  Home,
  IndianRupee,
  Search,
  Settings,
  TrendingUp,
} from "lucide-react-native";
import { useColorScheme } from "nativewind";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const colors = useMemo(() => {
    return {
      light: { background: "#FFFFFF", primary: "#2563eb", muted: "#6b7280" },
      dark: { background: "#000000", primary: "#3b82f6", muted: "#9ca3af" },
    }[colorScheme || "light"];
  }, [colorScheme]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          height: TAB_BAR_HEIGHT,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} size={16} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: ({ color }) => <TrendingUp color={color} size={16} />,
        }}
      />
      <Tabs.Screen
        name="budgets"
        options={{
          title: "Budgets",
          tabBarIcon: ({ color }) => <IndianRupee color={color} size={16} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Search color={color} size={16} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Settings color={color} size={16} />,
        }}
      />
      <AddExpenseFab />
    </Tabs>
  );
}
