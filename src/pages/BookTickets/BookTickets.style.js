import styled from "styled-components";

export const Section = styled.section`
  padding-top: 25rem;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 25%,
      rgb(11, 19, 42, 1) 55%
    ),
    url(${(props) => props.image});

  background-repeat: no-repeat;
  background-size: 100%;
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    background-image: url(${(props) => props.image});
    background-size: auto 28em;
    background-position: center top;
  }
`;

export const ContainerWrapper = styled.div`
  background: ${(props) => props.theme.color.mink};
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    max-width: ${(props) => props.theme.screens.mobile};
  }
  max-width: ${(props) => props.theme.screens.desktop};
  margin: 0 auto;
  border-radius: 1em 1em 0 0;
`;

export const Container = styled.div`
  background: ${(props) => props.theme.color.tint.white95};

  padding: 2em;
  border-radius: 1em 1em 0 0;
`;

export const Booking = styled.div``;

export const SeatsScreen = styled.div`
  align-self: center;
  text-align: center;
  box-sizing: border-box;
  width: 60%;
  padding: 0em 2em;
  padding-top: 2em;
  padding-bottom: 0.5em;
  border-bottom: 0.6em solid ${(props) => props.theme.color.mink};
  font-weight: bold;
  color: ${(props) => props.theme.color.blue};
`;

export const SeatsBlock = styled.div`
  padding-bottom: 1em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 100%;
  }
`;

export const SeatRow = styled.div`
  padding-top: 1em;
`;

export const SeatReserved = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 0.2em;
  border: 0;
  background: ${(props) => props.theme.color.blue};
`;

export const Seat = styled.div`
  background: ${(props) =>
    props.showtype === "selected"
      ? props.theme.color.yellow
      : props.theme.color.mink};
  width: 1em;
  height: 1em;
  border-radius: 0.2em;
  border: 0;
`;

export const Hero = styled.section`
  display: flex;
  justify-content: center;
  && > div {
    border-radius: 1rem 1rem 0 0;
    align-self: flex-end;
    max-width: ${(props) => props.theme.screens.desktop};
    width: 100%;
    padding: 1em 2em;
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.mink};
    opacity: 0.9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & span:first-child {
      text-transform: uppercase;
      font-weight: bold;
    }
    & span:last-child {
      color: ${(props) => props.theme.color.red};
      font-weight: bold;
      font-size: 1.5em;
    }
  }
`;

export const TicketsInfo = styled.div`
  border-radius: 0.25em;
  padding: 1em 2em;
  background: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    justify-content: space-between;
    font-size: 0.8em;
  }
  justify-content: space-evenly;
  font-size: 1em;
  && > div {
    padding: 1em 0em;
  }
  && div > span {
    background: ${(props) => props.theme.color.yellow};
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
    font-weight: bold;
    color: ${(props) => props.theme.color.blue};
  }
`;

export const ButtonWrap = styled.div`
  padding-top: 1em;
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    && > button {
      width: 100%;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.color.white};
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 50%;
    && button {
      width: 100%;
      margin-top: 1em;
    }
  }
  width: 25%;
  padding: 2em;
  border-radius: 1em;
  && p {
    width: 100%;
    text-align: center;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  }
  && button {
    margin-top: 1em;
  }
`;

export const EmptyData = styled.div`
  margin-top: 0.5em;
  padding: 0.5em 1em;
  border-radius: 0.25em;
  text-align: center;
  background: ${(props) => props.theme.color.white};
`;
