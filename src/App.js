import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <Router>
      <Home path="/" />
      <SinglePost path="posts/:slug" />
    </Router>
  );
}

export default App;
