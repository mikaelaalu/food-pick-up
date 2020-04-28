import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home path="/" />
    </div>
  );
}

export default App;
