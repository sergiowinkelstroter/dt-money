import { MagnifyingGlass } from "phosphor-react";
import * as C from "./styles";

export const SearchForm = () => {
  return (
    <C.SearchFormContainer>
      <input type="text" placeholder="Busque uma transação" />
      <button type="submit">
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </C.SearchFormContainer>
  );
};
