import React from "react";
import ReactDOM from "react-dom/client";
import Clock from "./components/clock";
import Title from "./components/bellowtittle";
import "./style.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Clock />
    <Title />
  </React.StrictMode>
);
