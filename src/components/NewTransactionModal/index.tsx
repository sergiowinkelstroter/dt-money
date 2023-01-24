import * as Dialog from "@radix-ui/react-dialog";
import * as C from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <C.Overlay />
      <C.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <C.CloseButton>
          <X size={24} />
        </C.CloseButton>
        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="text" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <C.TransactionType>
            <C.TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} /> Entrada
            </C.TransactionTypeButton>
            <C.TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} /> Saida
            </C.TransactionTypeButton>
          </C.TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </C.Content>
    </Dialog.Portal>
  );
};
