import React from "react";
import "./style.css";
import theme from "./constants/theme";
import Router from "./router/Router";
import { ThemeProvider } from "@mui/material";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalState>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </GlobalState>
    </>
  );
}

export default App;