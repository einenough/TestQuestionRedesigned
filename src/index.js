import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
   margin:0px;
   box-sizing:border-box
   font-family:"Rubik", sans-serif;
   width:100%;
}
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
