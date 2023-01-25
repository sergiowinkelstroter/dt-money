import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionsProvider } from "./context/TransactionsContext";

export const App = () => {
  return (
    <TransactionsProvider>
      <ThemeProvider theme={defaultTheme}>
        <Transactions />
        <GlobalStyle />
      </ThemeProvider>
    </TransactionsProvider>
  );
};
