import React from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Carrito from "./Carrito";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/phone/:type" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/item/:slug" element={<ItemDetailContainer />} />
      </Routes>
      <ToastContainer />
    </main>
  );
};

export default Main;
