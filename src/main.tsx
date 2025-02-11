import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/*<BrowserRouter basename={import.meta.env.BASE_URL}>*/}
    <App />
    {/*</BrowserRouter>*/}
  </React.StrictMode>,
);
