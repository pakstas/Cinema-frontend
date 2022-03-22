import styled from "styled-components";

export const Section = styled.section`
  background: ${(props) => props.background};
`;

export const Container = styled.div`
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    max-width: ${(props) => props.theme.screens.mobile};
  }
  max-width: ${(props) => props.theme.screens.desktop};
  min-height: calc(100vh - 15em);
  margin: 0 auto;
  padding: 2em 2em;
  background: ${(props) => props.color};
`;
