import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
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

  return summary;
};
