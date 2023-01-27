import * as C from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import logo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { useState } from "react";

export const Header = () => {
  const [isModalVisibility, setIsModalVisibility] = useState(false);

  const onModalClose = () => {
    setIsModalVisibility(!isModalVisibility);
  };

  return (
    <C.HeaderContainer>
      <C.HeaderContent>
        <div>
          <img src={logo} alt="" />
          <h1>DT Money</h1>
        </div>
        <Dialog.Root open={isModalVisibility}>
          <Dialog.Trigger asChild>
            <C.NewTransactionButton onClick={onModalClose}>
              Nova transação
            </C.NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal onModalVisibility={onModalClose} />
        </Dialog.Root>
      </C.HeaderContent>
    </C.HeaderContainer>
  );
};
