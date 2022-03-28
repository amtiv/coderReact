import React, { useContext } from "react";
import { BsCartFill } from "react-icons/bs";
import { cartContext } from "./CartContext";

const CartWidget = () => {
  const { totalProd } = useContext(cartContext);

  return (
    <div className="cartW">
      <BsCartFill />
      <span>({totalProd})</span>
    </div>
  );
};

export default CartWidget;
