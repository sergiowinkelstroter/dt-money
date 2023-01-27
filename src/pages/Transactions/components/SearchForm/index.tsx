import { MagnifyingGlass } from "phosphor-react";
import * as C from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../context/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchInputs = z.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <C.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        {...register("query")}
        type="text"
        placeholder="Busque uma transação"
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </C.SearchFormContainer>
  );
};
