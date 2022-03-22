import React, { useState } from "react";
import * as S from "./Header.style";
import imgLogo from "../../assets/demo.png";

function Header({ loggedIn, logout, admin }) {
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  return (
    <>
      <S.Header>
        <S.ImageLink to="/">
          <S.Logo src={imgLogo} alt="Demo Logo" />
        </S.ImageLink>
        <S.Actions>
          {width < 768 ? (
            <S.BurgerButton
              className={active ? "active" : ""}
              onClick={(e) => (active ? setActive(false) : setActive(true))}
            >
              <span>
                <div></div>
                <div></div>
                <div></div>
              </span>
            </S.BurgerButton>
          ) : (
            <>
              <S.StyledLink to="/">Home</S.StyledLink>
              {loggedIn && !admin && (
                <S.StyledLink to="/tickets">Tickets</S.StyledLink>
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
                  <S.StyledLink to="/login">Login</S.StyledLink>
                  <S.StyledLink to="/register">Register</S.StyledLink>
                </>
              )}
            </>
          )}
        </S.Actions>
      </S.Header>
      {/* burger links where burger is active */}
      {active && (
        <>
          <S.BurgerLink to="/" onClick={() => setActive(false)}>
            Home
          </S.BurgerLink>
          {loggedIn && !admin && (
            <S.BurgerLink to="/tickets" onClick={() => setActive(false)}>
              Tickets
            </S.BurgerLink>
          )}

          {!!admin && (
            <>
              <S.BurgerLink to="/cinema" onClick={() => setActive(false)}>
                Cinema
              </S.BurgerLink>
              <S.BurgerLink to="/movies" onClick={() => setActive(false)}>
                Movies
              </S.BurgerLink>
              <S.BurgerLink to="/movies/add" onClick={() => setActive(false)}>
                Add Movie
              </S.BurgerLink>
              <S.BurgerLink to="/showtimes" onClick={() => setActive(false)}>
                Showtimes
              </S.BurgerLink>
              <S.BurgerLink to="/tickets/all" onClick={() => setActive(false)}>
                Tickets
              </S.BurgerLink>
            </>
          )}
          {loggedIn && (
            <>
              <S.BurgerLink
                to=""
                onClick={() => {
                  logout();
                  setActive(false);
                }}
              >
                Logout
              </S.BurgerLink>
            </>
          )}
          {!loggedIn && (
            <>
              <S.BurgerLink to="/login" onClick={() => setActive(false)}>
                Login
              </S.BurgerLink>
              <S.BurgerLink to="/register" onClick={() => setActive(false)}>
                Register
              </S.BurgerLink>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Header;
