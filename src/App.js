import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Home path="/" />
        <SinglePost path="posts/:slug" />
      </Router>
    </div>
  );
}

export default App;
