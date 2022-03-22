import styled from "styled-components";

export const ShowtimeBlock = styled.div`
  background: ${(props) => props.theme.color.lightblue};
  color: ${(props) => props.theme.color.white};
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    flex-wrap: wrap;
  }
  margin-top: 2em;
  box-shadow: 0em 0.25em 1.25em 0em rgba(0, 0, 0, 0.3);
  transition: 0.3s background ease-in-out;
  &&:hover {
    background: ${(props) => props.theme.color.blue};
  }
`;

export const ShowtimeImg = styled.img`
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 100%;
    height: 20em;
    object-position: 0% 10%;
    object-fit: cover;
  }
  width: 150px;
  border-radius: 4px;
  object-fit: cover;
`;

export const ShowtimeDetails = styled.div`
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

export const ShowtimeHeader = styled.div`
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    flex-wrap: wrap;
    && p {
      text-align: left;
    }
  }
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShowtimeTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  text-transform: capitalize;
`;

export const ShowtimeSubtitle = styled.p`
  text-align: right;
  width: 100%;
  font-size: 0.9em;
  text-transform: capitalize;
  color: ${(props) => props.theme.color.grey};
`;

export const ShowtimeDescription = styled.p`
  width: 100%;
  font-size: 1em;
  line-height: 1.5em;
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    font-size: 0.9em;
  }
`;

export const ShowtimeDirector = styled.p`
  width: 100%;
  font-size: 0.8em;
  text-transform: capitalize;
  font-style: italic;
`;

export const ShowtimeTag = styled.span`
  padding: 0.5em;
  background: ${(props) => props.theme.color.yellow};
  border-radius: 0.5em;
  font-size: 0.8em;
  color: ${(props) => props.theme.color.blue};
`;

export const ShowtimeTagTime = styled(ShowtimeTag)`
  padding: 0;
  background: none;
  border-radius: none;
  font-weight: bold;
  font-size: 1.5em;
  color: ${(props) => props.theme.color.red};
`;

// export const ShowtimeInfo = styled.div`
//   @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
//     padding: 2em;
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//   }
// `;

export const ShowtimeActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  @media only screen and (max-width: ${(props) => props.theme.screens.mobile}) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    && button {
      width: 100%;
      margin-top: 1.5em;
    }
  }
`;
