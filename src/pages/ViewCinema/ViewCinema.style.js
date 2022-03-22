import styled from "styled-components";

export const PageWrap = styled.div`
  display: flex;
  & > div:first-child {
    padding-right: 2em;
    flex: 2;
  }
  & > div:nth-child(2) {
    padding: 0em 2em;
    padding-bottom: 2em;
    border-radius: 0.5em;
    flex: 1;
    background: ${(props) => props.theme.color.lightgrey};
  }
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    flex-wrap: wrap;
    flex-direction: column;
    & > div:first-child {
      padding: 0;
    }
    & > div:nth-child(2) {
      padding: 0;
      background: none;
    }
  }
`;

export const PageBlock = styled.div`
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 100%;
    &:nth-child(2) {
      margin-top: 3em;
    }
  }
`;

export const CinemaTable = styled.table`
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

export const Form = styled.form`
  && > div:not(:first-child) {
    padding-top: 1em;
    display: flex;
    justify-content: center;
    & > button {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media only screen and (max-width: ${(props) =>
        props.theme.screens.mobile}) {
      & > button {
        width: 100%;
      }
    }
  }
  border-radius: 0.5em;
  background: ${(props) => props.theme.color.mink};
  padding: 1em;
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
