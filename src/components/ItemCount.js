import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const handleIncrease = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleSubtract = () => {
    if (initial < contador) {
      setContador(contador - 1);
    }
  };

  const handleSubmit = () => {
    onAdd(contador);
  };

  return (
    <section>
      <Button variant="success" onClick={handleIncrease}>
        Add
      </Button>{" "}
      Current amount: {contador}{" "}
      <Button variant="danger" onClick={handleSubtract}>
        Subtract
      </Button>
      <br />
      <Button variant="warning" onClick={handleSubmit}>
        Add to cart
      </Button>
    </section>
  );
};

export default ItemCount;
