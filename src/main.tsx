import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";

console.log("main.tsx");
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
