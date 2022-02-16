import React from "react";
import "./style.css";
import theme from "./constants/theme";
import Router from "./router/Router";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
