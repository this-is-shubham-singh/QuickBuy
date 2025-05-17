import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {DataContextProvider} from "./context/DataContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </BrowserRouter>
);
