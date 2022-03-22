import React, { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loading } from "./components";
import { Header, Footer, PrivateRoute, AdminRoute } from "./components";
import { AuthContext } from "./contexts/AuthContext";
import jwtDecode from "jwt-decode";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));
const RegisterLazy = lazy(() => import("./pages/Register/Register"));
const BookTicketsLazy = lazy(() => import("./pages/BookTickets/BookTickets"));
const ViewTicketsLazy = lazy(() => import("./pages/ViewTickets/ViewTickets"));
const ViewMoviesLazy = lazy(() => import("./pages/ViewMovies/ViewMovies"));
const AddMovieLazy = lazy(() => import("./pages/AddMovie/AddMovie"));
const EditMovieLazy = lazy(() => import("./pages/EditMovie/EditMovie"));
const ViewCinemaLazy = lazy(() => import("./pages/ViewCinema/ViewCinema"));
const ViewTicketsAllLazy = lazy(() =>
  import("./pages/ViewTicketsAll/ViewTicketsAll")
);
const ViewShowtimesLazy = lazy(() =>
  import("./pages/ViewShowtimes/ViewShowtimes")
);

function Routes() {
  const auth = useContext(AuthContext);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header
          loggedIn={!!auth.token}
          admin={
            auth.token && jwtDecode(auth.token).user_type === "admin"
              ? true
              : false
          }
          logout={() => {
            auth.updateToken("");
            localStorage.removeItem("token");
          }}
        />
        <Switch>
          <Route exact path="/" component={HomeLazy} />
          <Route exact path="/login" component={LoginLazy} />
          <Route exact path="/register" component={RegisterLazy} />
          <PrivateRoute
            path="/book/:showtimeId"
            component={BookTicketsLazy}
            redirectPath={auth.token ? "/" : "/login"}
          />
          <PrivateRoute
            exact
            path="/tickets"
            component={ViewTicketsLazy}
            redirectPath={auth.token ? "/" : "/login"}
          />
          <AdminRoute
            exact
            path="/movies"
            component={ViewMoviesLazy}
            redirectPath={auth.token ? "/" : "/login"}
          />
          <AdminRoute
            exact
            path="/movies/add"
            component={AddMovieLazy}
            redirectPath={auth.token ? "/" : "/login"}
          />
          <AdminRoute
            exact
            path="/movies/edit/:movieId"
            component={EditMovieLazy}
            redirectPath={auth.token ? "/" : "/login"}
          />
          <AdminRoute
            exact
            path="/cinema"
            component={ViewCinemaLazy}
            redirectPath={auth.token ? "/" : "/login"}
          />
          <AdminRoute
            exact
            path="/tickets/all"
            component={ViewTicketsAllLazy}
            redirectPath={auth.token ? "/" : "/login"}
          />
          <AdminRoute
            exact
            path="/showtimes"
            component={ViewShowtimesLazy}
            redirectPath={auth.token ? "/" : "/login"}
          />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default Routes;
