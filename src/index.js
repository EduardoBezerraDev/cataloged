import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./routes";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);

reportWebVitals();
