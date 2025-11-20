import { View } from "react-native";
import { Card, Text, TouchableRipple } from "react-native-paper";
import { useAppTheme } from "../providers/PaperProvider";

interface ITransactionItemProps {
  transaction: {
    id: string;
    type: "expense" | "income";
    amount: number;
    category: string;
    date: string;
    paymentMethod: string;
    notes?: string;
  };
  category?: {
    name: string;
    icon: React.ReactNode;
    color: string;
  };
  onClick?: () => void;
}

export function TransactionItem({
  transaction,
  category,
  onClick,
}: ITransactionItemProps) {
  const theme = useAppTheme();
  const isExpense = transaction.type === "expense";

  return (
    <TouchableRipple onPress={onClick} disabled={!onClick}>
      <Card
        className="bg-white border border-gray-200 rounded-lg"
        style={{ padding: 16, marginBottom: 8 }}
      >
        <View className="flex-row justify-between items-center gap-x-4">
          <View className="flex-row items-center gap-x-3">
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 9999,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: category?.color
                  ? category.color + "20"
                  : "#00000020",
              }}
            >
              <Text>{category?.icon}</Text>
            </View>

            <View className="gap-y-1">
              <Text className="text-base">{transaction.category}</Text>

              {transaction.notes ? (
                <Text className="text-sm text-gray-500">
                  {transaction.notes}
                </Text>
              ) : null}

              <Text className="text-xs text-gray-400">
                {new Date(transaction.date).toLocaleDateString()} •{" "}
                {transaction.paymentMethod}
              </Text>
            </View>
          </View>

          <View className="items-end">
            <Text
              className={"text-base"}
              style={{
                color: isExpense ? theme.colors.error : theme.colors.success,
              }}
            >
              {isExpense ? "-" : "+"}${transaction.amount.toFixed(2)}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableRipple>
  );
}
