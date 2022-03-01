import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
  const [contador, setContador] = useState(props.initial);

  const handleIncrease = () => {
    if (contador >= props.stock) {
      setContador(contador);
    } else {
      setContador(contador + 1);
    }
  };

  const handleSubtract = () => {
    if (props.initial >= contador) {
      setContador(contador);
    } else {
      setContador(contador - 1);
    }
  };

  return (
    <p>
      <button onClick={handleIncrease}>Agregar</button> Cantidad actual:
      {contador} <button onClick={handleSubtract}> Sacar</button>
      <br />
      <button onClick={props.onAdd}>Agregar al carrito</button>
    </p>
  );
};

export default ItemCount;
