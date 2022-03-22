import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AdminRoute = ({ path, component, redirectPath }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const tokenExpiration = jwtDecode(token).exp;
      const user_type = jwtDecode(token).user_type;
      const timeNow = new Date().getTime() / 1000;

      if (tokenExpiration < timeNow || user_type !== "admin") {
        setIsAdmin(false);
      } else {
        setIsAdmin(true);
      }
    } else {
      setIsAdmin(false);
    }
  }, []);

  if (isAdmin === null) {
    return <></>;
  } else if (isAdmin) {
    return <Route exact path={path} component={component} />;
  } else {
    return <Redirect to={redirectPath} />;
  }
};

export default AdminRoute;
