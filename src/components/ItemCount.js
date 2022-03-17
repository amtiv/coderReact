import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = (props) => {
  const [contador, setContador] = useState(props.initial);

  const handleIncrease = () => {
    if (contador < props.stock) {
      setContador(contador + 1);
    }
  };

  const handleSubtract = () => {
    if (props.initial < contador) {
      setContador(contador - 1);
    }
  };

  const handleSubmit = (e) => {
    props.onAdd(contador);
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
