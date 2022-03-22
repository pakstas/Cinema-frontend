import styled from "styled-components";

export const TextTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.blue};
  font-weight: 900;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  & span:last-child {
    color: ${(props) => props.theme.color.red};
  }
`;
