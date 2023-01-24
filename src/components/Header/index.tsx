import * as C from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import logo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export const Header = () => {
  return (
    <C.HeaderContainer>
      <C.HeaderContent>
        <div>
          <img src={logo} alt="" />
          <h1>DT Money</h1>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <C.NewTransactionButton>Nova transação</C.NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </C.HeaderContent>
    </C.HeaderContainer>
  );
};
