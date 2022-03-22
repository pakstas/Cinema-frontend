import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  max-width: 100%;
  height: 5em;
  padding: 1em 2em;
  background: ${(props) => props.theme.color.red};
  color: ${(props) => props.theme.color.white};
`;
