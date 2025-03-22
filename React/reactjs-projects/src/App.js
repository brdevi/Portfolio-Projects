import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      {/*Accordian component*/}
      <Accordian />
      {/*Random Color*/}
      <RandomColor />
    </div>
  );
}

export default App;
