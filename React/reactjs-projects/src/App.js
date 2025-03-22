import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import { useState } from "react";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/*Accordian component*/}
      <Accordian />
      {/*Random Color*/}
      <RandomColor />
      {/*star rating*/}
      <StarRating />
    </div>
  );
}

export default App;
