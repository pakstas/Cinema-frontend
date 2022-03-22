import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme";
import { GlobalStyles } from "./globalStyles";
import "normalize.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <GlobalStyles />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
