import { useMemo } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export const useSummary = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.icome += transaction.price;
          acc.total += transaction.price;
        } else {
          acc.outcome += transaction.price;
          acc.total -= transaction.price;
        }

        return acc;
      },
      { icome: 0, outcome: 0, total: 0 }
    );
  }, [transactions]);

  return summary;
};
