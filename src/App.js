import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar classname="main-header" />
      <Main />
    </BrowserRouter>
  );
};

export default App;
