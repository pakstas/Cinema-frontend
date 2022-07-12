import styled from "styled-components";

const img =
  "https://images.unsplash.com/photo-1545277517-919cb4049d52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

export const Section = styled.section`
  padding-top: 25rem;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 20%,
      rgb(11, 19, 42, 1) 50%
    ),
    url(${img});

  background-repeat: no-repeat;
  background-size: 100%;
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-top: 20rem;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 12rem;
  }
`;

export const Container = styled.div`
  background: ${(props) => props.theme.color.tint.white95};
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    max-width: ${(props) => props.theme.screens.mobile};
  }
  max-width: ${(props) => props.theme.screens.desktop};
  padding: 2em;
  border-radius: 1em 1em 0 0;
  margin: 0 auto;
`;

export const WrapCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.div`
  width: calc((100% - 32px) / 3);
  height: 350px;
  padding: 16px;
  border-radius: 4px;
  background: ${(props) => props.theme.color.white};
  box-sizing: border-box;
  background-image: url(${(props) => props.image});
  background-size: cover;
  &&:hover {
    && div {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`;

export const CardTitle = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  color: ${(props) => props.theme.color.white};
  font-weight: bold;
  min-height: 30px;
  line-height: 30px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const EmptyShowtime = styled.div`
  margin-top: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  text-align: center;
  background: ${(props) => props.theme.color.white};
`;
