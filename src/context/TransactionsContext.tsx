import { ReactNode, createContext } from "react";
import { Transaction } from "../pages/Transactions";
import { useQuery } from "react-query";

interface TransactionsProvider {
  children: ReactNode;
}

interface TransactionsContextData {
  data: Transaction[] | undefined;
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export const TransactionsProvider = ({ children }: TransactionsProvider) => {
  const getTransactions = async () => {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    return data;
  };
  const key = "transactions";

  const { data } = useQuery<Transaction[]>(key, getTransactions);

  return (
    <TransactionsContext.Provider value={{ data }}>
      {children}
    </TransactionsContext.Provider>
  );
};
