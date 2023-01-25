import * as C from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFormatted } from "../../utils/Formatter";
import { useSummary } from "../../hooks/useSummary";

export const Summary = () => {
  const summary = useSummary();

  return (
    <C.SummaryContainer>
      <C.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatted(summary?.icome!)}</strong>
      </C.SummaryCard>
      <C.SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{priceFormatted(summary?.outcome!)}</strong>
      </C.SummaryCard>
      <C.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFF" />
        </header>
        <strong>R{priceFormatted(summary?.total!)}</strong>
      </C.SummaryCard>
    </C.SummaryContainer>
  );
};
