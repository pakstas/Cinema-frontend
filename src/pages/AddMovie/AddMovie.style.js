import styled from "styled-components";

export const Form = styled.form`
  && > div:not(:first-child) {
    padding-top: 1em;
    display: flex;
    justify-content: center;
    & > button {
      width: 30%;
    }
    @media only screen and (max-width: ${(props) =>
        props.theme.screens.mobile}) {
      & > button {
        width: 100%;
      }
    }
  }
  && > div:nth-child(8) {
    display: flex;
    justify-content: space-between;
    & > div:not(:first-child) {
      margin-left: 1em;
    }
    & > div {
      flex: 1;
    }
    @media only screen and (max-width: ${(props) =>
        props.theme.screens.mobile}) {
      flex-wrap: wrap;
      flex-direction: column;
      & > div:not(:first-child) {
        margin-left: 0em;
        padding-top: 1em;
      }
    }
  }
  && > i {
    display: block;
    padding-top: 1em;
    text-align: center;
    & > img {
      max-width: 50%;
      object-fit: cover;
      border-radius: 0.5em;
    }
  }
  border-radius: 0.5em;
  background: ${(props) => props.theme.color.mink};
  padding: 1em;
`;
