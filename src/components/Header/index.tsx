import * as C from "./styles";

import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <C.HeaderContainer>
      <C.HeaderContent>
        <div>
          <img src={logo} alt="" />
          <h1>DT Money</h1>
        </div>
        <C.NewTransactionButton>Nova transação</C.NewTransactionButton>
      </C.HeaderContent>
    </C.HeaderContainer>
  );
};
