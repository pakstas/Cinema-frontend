import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  // width: 100%;
  // height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
  border: 0.5em solid ${(props) => props.theme.color.red};
  border-radius: 50%;
  border-top: 0.5em solid ${(props) => props.theme.color.black};
  width: 3em;
  height: 3em;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
