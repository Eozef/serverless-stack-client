import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowerRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router.StrictMode>
    <App />
  </Router.StrictMode>,
  document.getElementById("root")
);
