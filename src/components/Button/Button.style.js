import styled from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;
  outline: none;
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
  border: 4px solid
    ${(props) =>
      props.color === "primary"
        ? props.theme.color.blue
        : props.theme.color.red};
  padding: 0.5em 2em;
  border-radius: 3em;
  cursor: pointer;
  transition: 0.3s background-color ease-in-out;
  &:hover {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.background
        : props.theme.secondary.hover.background};
    color: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.color
        : props.theme.secondary.hover.color};
    border: 4px solid
      ${(props) =>
        props.color === "primary"
          ? props.theme.color.lightblue
          : props.theme.color.white};
  }
`;
