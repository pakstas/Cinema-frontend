import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.img`
  max-height: 50px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0em 0.5em 1.25em 0em rgba(0, 0, 0, 0.3);
    border-radius: 0.5em;
  }
`;

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0em 2em;
  background: ${(props) => props.theme.color.red};
  height: 5em;
  box-shadow: 0em 0.5em 1.25em 0em rgba(0, 0, 0, 0.3);
  z-index: 99;
  position: sticky;
`;

export const HeaderDiv = styled.div``;

export const Actions = styled.nav`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  && > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageLink = styled(Link)``;

export const StyledLink = styled(Link)`
  padding: 0.5em 1em;
  box-sizing: border-box;
  text-decoration: none;
  color: ${(props) => props.theme.color.white};
  display: block;
  height: 100%;
  background: ${(props) => props.theme.color.red};
  border-bottom: 0.5em solid ${(props) => props.theme.color.red};
  border-top: 0.5em solid ${(props) => props.theme.color.red};
  &:hover {
    border-bottom-color: ${(props) => props.theme.color.mink};
    // background: ${(props) => props.theme.color.mink};
    color: ${(props) => props.theme.color.mink};
    // border-top-color: ${(props) => props.theme.color.mink};
  }
`;

export const BurgerLink = styled(Link)`
  text-align: center;
  &:hover {
    background: ${(props) => props.theme.color.mink};
    color: ${(props) => props.theme.color.blue};
  }
  text-decoration: none;
  color: ${(props) => props.theme.color.white};
  display: block;
  padding: 1em 2em;
  background: ${(props) => props.theme.color.red};
  font-weight: bold;
`;

export const BurgerButton = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 2em;
  padding: 0.5em;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  background: ${(props) => props.theme.color.white};
  && div {
    width: 2em;
    height: 0.3em;
    background-color: ${(props) => props.theme.color.black};
    margin: 0.4em 0;
    transition: 0.4s;
  }
  &.active {
    & div:nth-child(1) {
      // transform: rotate(-45deg) translate(-0.55em, 0.375em);
      transform: rotate(-45deg) translate(-0.5em, 0.5em);
    }
    & div:nth-child(2) {
      opacity: 0;
    }
    & div:nth-child(3) {
      // transform: rotate(45deg) translate(-1.5em, -1.5em);
      transform: rotate(45deg) translate(-0.5em, -0.5em);
    }
  }
`;
