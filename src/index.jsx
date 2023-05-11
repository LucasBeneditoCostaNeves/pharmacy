import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GericoProvider } from "./context/fullcontext";
import { GlobalStyle } from "./style/globalStyled";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GericoProvider>
      <GlobalStyle/>
      <App />
    </GericoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
