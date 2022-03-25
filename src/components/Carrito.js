import React from "react";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";

const Carrito = () => {
  const useCartContext = useContext(cartContext);
  const { cart, remove, clear } = useCartContext;

  return (
    <section className="container">
      <div>
        {cart.length === 0 ? (
          <Link to="/">
            <Button color="info">
              <h2>Cart empty :(</h2>
            </Button>
          </Link>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.product.id}>
                <img
                  src={item.product.pictureUrl}
                  height="250px"
                  width="200px"
                  alt="sample cell"
                />
                <span>
                  <h3>Item:</h3>
                  <p>{item.product.title}</p>
                </span>
                <span>
                  <h3>Price x Amount: </h3>
                  <p>
                    $ {item.product.price} x {item.count} units
                  </p>
                </span>
                <span>
                  <h3>Total:</h3> <p>${item.product.price * item.count}</p>
                </span>
                <Button onClick={() => remove(item.product)} variant="danger">
                  Delete from cart
                </Button>{" "}
                {""}
                <Button onClick={clear} variant="info">
                  Clear cart
                </Button>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Carrito;
