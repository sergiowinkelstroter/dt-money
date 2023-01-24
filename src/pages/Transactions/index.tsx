import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import * as C from "./styles";

export const Transactions = () => {
  return (
    <>
      <Header />
      <Summary />
      <C.TransactionsContainer>
        <SearchForm />
        <C.TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <C.PriceHighlight variant="income">
                  R$ 12.000,00
                </C.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <C.PriceHighlight variant="outcome">
                  - R$ 59,00
                </C.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Computador</td>
              <td>
                <C.PriceHighlight variant="income">
                  R$ 5.400,00
                </C.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>15/03/2022</td>
            </tr>
          </tbody>
        </C.TransactionsTable>
      </C.TransactionsContainer>
    </>
  );
};
