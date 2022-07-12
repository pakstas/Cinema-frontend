import React, { useState } from "react";
import * as S from "./Header.style";
import imgLogo from "../../assets/demo.png";

function Header({ loggedIn, logout, admin }) {
  const [active, setActive] = useState(false);

  function toggleActive() {
    active ? setActive(false) : setActive(true);
  }

  return (
    <>
      <S.Header>
        <S.ImageLink to="/">
          <S.Logo src={imgLogo} alt="Demo Logo" />
        </S.ImageLink>

        <S.HeaderDiv className={active ? "active" : ""}>
          <S.Actions>
            <S.StyledLink to="/" onClick={active && toggleActive}>
              Home
            </S.StyledLink>
            {loggedIn && !admin && (
              <S.StyledLink to="/tickets" onClick={active && toggleActive}>
                Tickets
              </S.StyledLink>
            )}
            {loggedIn && admin && (
              <>
                <S.StyledLink to="/cinema">Cinema</S.StyledLink>
                <S.StyledLink to="/movies">Movies</S.StyledLink>
                <S.StyledLink to="/movies/add">Add Movie</S.StyledLink>
                <S.StyledLink to="/showtimes">Showtimes</S.StyledLink>
                <S.StyledLink to="/tickets/all">Tickets</S.StyledLink>
              </>
            )}
            {loggedIn && (
              <S.StyledLink to="" onClick={logout}>
                Logout
              </S.StyledLink>
            )}

            {!loggedIn && (
              <>
                <S.StyledLink to="/login" onClick={active && toggleActive}>
                  Login
                </S.StyledLink>
                <S.StyledLink to="/register" onClick={active && toggleActive}>
                  Register
                </S.StyledLink>
              </>
            )}
          </S.Actions>
        </S.HeaderDiv>

        <S.BurgerButton
          className={active ? "active" : ""}
          onClick={toggleActive}
        >
          <span>
            <div></div>
            <div></div>
            <div></div>
          </span>
        </S.BurgerButton>
      </S.Header>
    </>
  );
}

export default Header;
