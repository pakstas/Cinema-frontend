import styled from "styled-components";

export const TicketsTable = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  && th {
    color: ${(props) => props.theme.color.white};
    padding: 1em 0.4em;
    font-size: 0.9em;
  }
  && td {
    font-size: 0.9em;
    padding: 0.4em;
    border: 0.1em solid ${(props) => props.theme.color.mink};
  }
  && thead > tr {
    background: ${(props) => props.theme.color.lightblue};
  }

  && tbody > tr:nth-child(even) {
    background: ${(props) => props.theme.color.lightgrey};
  }
  && tbody > tr:nth-child(odd) {
    background: ${(props) => props.theme.color.darkergrey};
  }
  && tbody > tr {
    &:hover {
      background: ${(props) => props.theme.color.white};
    }
    & > td:nth-child(2) {
      text-transform: capitalize;
    }
  }
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    && tr > td:nth-child(1),
    td:nth-child(4),
    td:nth-child(6) {
      display: none;
    }
    && tr > th:nth-child(1),
    th:nth-child(4),
    th:nth-child(6) {
      display: none;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.color.white};
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 50%;
    && button {
      width: 100%;
      margin-top: 1em;
    }
  }
  width: 25%;
  padding: 2em;
  border-radius: 1em;
  && p {
    width: 100%;
    text-align: center;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  }
  && button {
    margin-top: 1em;
  }
`;

export const DeleteBtn = styled.button`
  outline: none;
  border: none;
  padding: 0.2em 0.5em;
  border-radius: 0.2em;
  background: ${(props) => props.theme.color.red};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.color.blue};
  }
`;

export const PaginationBlock = styled.div`
  width: 100%;
  padding: 1em 0em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.button`
  margin: 0 0.25em;
  padding: 0.1rem 0.25rem;
  outline: none;
  border: 0.1em solid ${(props) => props.theme.color.mink};
  font-size: 0.8rem;
  background: none;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.color.mink};

    color: ${(props) => props.theme.color.white};
  }
  &:disabled {
    background: ${(props) => props.theme.color.mink};
  }
`;
