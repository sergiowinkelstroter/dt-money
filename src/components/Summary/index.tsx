import * as C from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export const Summary = () => {
  return (
    <C.SummaryContainer>
      <C.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 17.400,00</strong>
      </C.SummaryCard>
      <C.SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>R$ 17.400,00</strong>
      </C.SummaryCard>
      <C.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFF" />
        </header>
        <strong>R$ 17.400,00</strong>
      </C.SummaryCard>
    </C.SummaryContainer>
  );
};
