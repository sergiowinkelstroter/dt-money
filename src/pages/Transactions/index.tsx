import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import * as C from "./styles";
import { dateFormatter, priceFormatted } from "../../utils/Formatter";
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <Header />
      <Summary />
      <C.TransactionsContainer>
        <SearchForm />
        <C.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <C.PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && " - "}
                      {priceFormatted(transaction.price)}
                    </C.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter(new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </C.TransactionsTable>
      </C.TransactionsContainer>
    </>
  );
};
