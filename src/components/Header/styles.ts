import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 1rem;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

export const NewTransactionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.2rem;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme["green-500"]};
  border-radius: 6px;
  border: none;

  font-weight: bold;
  font-size: 1rem;
  line-height: 160%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["green-300"]};
    transition: background-color 0.3s;
  }
`;
