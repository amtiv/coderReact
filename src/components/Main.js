import React from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import Carrito from "./Carrito";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/phone/:type" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/item/:slug" element={<ItemDetailContainer />} />
      </Routes>
    </main>
  );
};

export default Main;
