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
export const HeaderDiv = styled.div`
  height: 100%;
  @media screen and (max-width: 767px) {
    display: none;
    &.active {
      display: initial;
    }
  }
`;

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
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 5em;
    right: 0;
    width: 100%;
    height: 15em;
    background: ${(props) => props.theme.color.red};
    flex-wrap: wrap;
    flex-direction: column;
    && > a {
      width: 100%;
      height: 5em;
    }
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
  position: relative;

  // Border animation on hover
  &:hover {
    border: none;
    border-bottom: 0px solid ${(props) => props.theme.color.mink};
    color: ${(props) => props.theme.color.mink};
  }
  &::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0.5em;
    left: 50%;
    bottom: 0;
    background-color: ${(props) => props.theme.color.mink};
    transition: all ease-in-out 0.2s;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }

  @media screen and (max-width: 767px) {
    // height: 5em;
    // width: 100%;
  }
`;

export const BurgerButton = styled.div`
  @media screen and (max-width: 767px) {
    display: inline-block;
  }
  display: none;
  cursor: pointer;
  width: 1.2em;
  // padding: 0.25em;
  && div {
    width: 1.2em;
    height: 0.2em;
    background-color: ${(props) => props.theme.color.black};
    margin: 0.2em 0;
    transition: 0.4s;
  }
  &.active {
    & div:nth-child(1) {
      transform: rotate(-45deg) translate(-0.28em, 0.3em);
    }
    & div:nth-child(2) {
      opacity: 0;
    }
    & div:nth-child(3) {
      transform: rotate(45deg) translate(-0.25em, -0.3em);
    }
  }
`;
