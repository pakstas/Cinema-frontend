import styled from "styled-components";

export const Section = styled.div`
  height: calc(100vh - 14.6em);
  max-width: ${(props) => props.theme.screens.mobile};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.color.blue};
`;

export const FormBlock = styled.div`
  min-width: 100%;
  padding: 1em;
  border-radius: 0.5em;
  background: ${(props) => props.theme.color.mink};
  && button {
    margin-top: 1em;
    width: 100%;
  }
  && div {
    margin-top: 1em;
  }
`;
