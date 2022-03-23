import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import CartProvider from "./components/CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Main />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
