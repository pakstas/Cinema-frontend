import styled from "styled-components";

export const MoviesTable = styled.table`
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
    & > td:nth-child(2),
    td:nth-child(3),
    td:nth-child(4) {
      text-transform: capitalize;
    }
    & > td:last-child {
      & > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        & > button {
          margin: 0.5em;
        }
      }
    }
  }
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    && tr > td:nth-child(1),
    td:nth-child(3),
    td:nth-child(4) {
      display: none;
    }
    && tr > th:nth-child(1),
    th:nth-child(3),
    th:nth-child(4) {
      display: none;
    }
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

export const EditBtn = styled.button`
  outline: none;
  border: none;
  padding: 0.2em 0.5em;
  border-radius: 0.2em;
  background: ${(props) => props.theme.color.yellow};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.color.blue};
  }
`;
