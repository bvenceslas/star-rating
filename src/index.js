import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StartRating from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div className="">
      <StartRating maxRating={10} color="blue" onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StartRating maxRating={5} size={24} color="red" />

    <Test />
  </React.StrictMode>
);
