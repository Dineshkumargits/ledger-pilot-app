import { LinearGradient } from "expo-linear-gradient";

import { categories, transactions } from "@/lib/data/mockData";
import { useRouter } from "expo-router";
import { useMemo } from "react";

import { useAppTheme } from "@/components/providers/PaperProvider";
import { TransactionItem } from "@/components/transaction/transaction-item";
import { TAB_BAR_HEIGHT } from "@/lib/utils/constants";
import { IndianRupee, TrendingDown, TrendingUp } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Card, Text, } from 'react-native-paper';

export default function HomeScreen() {
  const { colorScheme } = useColorScheme();
  const theme = useAppTheme();
  const router = useRouter();

  const paddingBottom = TAB_BAR_HEIGHT + 24;

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const tDate = new Date(t.date);
      return (
        tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear
      );
    });
  }, []);

  const summary = useMemo(() => {
    const expenses = monthlyTransactions.filter((t) => t.type === "expense");
    const income = monthlyTransactions.filter((t) => t.type === "income");

    const totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0);
    const totalIncome = income.reduce((sum, t) => sum + t.amount, 0);
    const balance = totalIncome - totalExpenses;

    return { totalExpenses, totalIncome, balance };
  }, [monthlyTransactions]);

  const chartData = useMemo(() => {
    const categoryTotals: Record<string, number> = {};

    monthlyTransactions
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        categoryTotals[t.category] =
          (categoryTotals[t.category] || 0) + t.amount;
      });

    return Object.entries(categoryTotals)
      .map(([name, value]) => {
        const cat = categories.find((c) => c.name === name);
        return {
          name,
          value,
          color: cat?.color || "#999",
        };
      })
      .sort((a, b) => b.value - a.value);
  }, [monthlyTransactions]);

  const recentTransactions = useMemo(() => {
    return [...monthlyTransactions]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [monthlyTransactions]);

  const headerColors = useMemo(() => {
    return colorScheme === "dark"
      ? { text: "#fff", bg: ["#1e3a8a", "#1e40af"], cardsBG: "#1e40af" }
      : { text: "#fff", bg: ["#2563eb", "#1e40af"], cardsBG: "#1e40af" };
  }, [colorScheme]);

  return (
    <View className="bg-background flex-1" style={{ backgroundColor: theme.colors.background }}>
      {/* HEADER */}
      <View className="rounded-b-3xl overflow-hidden">
        <LinearGradient
          colors={[headerColors.bg[0], headerColors.bg[1]]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            padding: 36,
            paddingTop: 56,
          }}
        >
          <Text className="text-2xl mb-6" style={{ color: headerColors.text }}>
            Dashboard
          </Text>

          <View className="flex-row w-full gap-x-3">
            {/* EXPENSES CARD */}
            <Card
            elevation={4}
              className={`flex-1 rounded-xl`}
              style={{ backgroundColor: headerColors.cardsBG, padding: 12 }}
            >
              <View className="flex-row items-center gap-x-2 mb-2">
                <TrendingDown size={16} color={headerColors.text}/>
                <Text
                  className="text-xs opacity-80"
                  style={{ color: headerColors.text }}
                >
                  Expenses
                </Text>
              </View>

              <Text className="text-xl" style={{ color: headerColors.text }}>
                ${summary.totalExpenses.toFixed(2)}
              </Text>
            </Card>

            {/* INCOME CARD */}
            <Card
              className={`flex-1 rounded-xl`}
              style={{ backgroundColor: headerColors.cardsBG, padding: 12 }}
            >
              <View className="flex-row items-center gap-x-2 mb-2">
                <TrendingUp size={16} color={headerColors.text} />
                <Text
                  className="text-xs opacity-80"
                  style={{ color: headerColors.text }}
                >
                  Income
                </Text>
              </View>

              <Text className="text-xl" style={{ color: headerColors.text }}>
                ${summary.totalIncome.toFixed(2)}
              </Text>
            </Card>

            {/* BALANCE CARD */}
            <Card
              className={`flex-1 rounded-xl`}
              style={{ backgroundColor: headerColors.cardsBG, padding: 12 }}
            >
              <View className="flex-row items-center gap-x-2 mb-2">
                <IndianRupee size={16} color={headerColors.text} />
                <Text
                  className="text-xs opacity-80"
                  style={{ color: headerColors.text }}
                >
                  Balance
                </Text>
              </View>

              <Text className="text-xl" style={{ color: headerColors.text }}>
                ${summary.balance.toFixed(2)}
              </Text>
            </Card>
          </View>
        </LinearGradient>
      </View>
      <ScrollView>
        {/* BODY */}
        <View className={`p-6 pb-[${paddingBottom}px]`}>
          {/* PIE CHART CARD */}
          {/* <Box className="bg-white rounded-xl p-6 shadow-sm mb-6">
           <Text className="text-lg mb-4">Expenses by Category</Text>

           {chartData.length > 0 ? (
             <View className="w-full items-center">
               <PieChartComponent data={chartData} size={250} innerRadius={40} />
             </View>
           ) : (
             <Text className="text-center text-gray-500 py-8">
               No expenses this month
             </Text>
           )}
         </Box> */}

          {/* RECENT TRANSACTIONS HEADER */}
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg">Recent Transactions</Text>

            <Button mode="text" onPress={() => router.push("/(tabs)/search")}>
              <Text className="text-sm underline" style={{color: theme.colors.primary}}>View All</Text>
            </Button>
          </View>

          {/* TRANSACTION LIST */}
          <View className="gap-y-3">
            {recentTransactions.map((t) => (
              <TransactionItem
                key={t.id}
                transaction={t}
                category={
                  t.category
                    ? categories.find((c) => c.name === t.category)
                    : undefined
                }
                onClick={() => router.push("/(tabs)/search")}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}