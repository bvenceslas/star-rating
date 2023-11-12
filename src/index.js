import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StartRating from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StartRating maxRating={5} />
    <StartRating maxRating={5} size={24} color="red" />
  </React.StrictMode>
);
