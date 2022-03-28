import React from "react";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";

const Carrito = () => {
  const useCartContext = useContext(cartContext);
  const { cart, remove, clear, totalPrice, totalProd } = useCartContext;

  return (
    <>
      <div id="container" className="cartContainer">
        {cart.length === 0 ? (
          <div className="empty">
            <Link to="/">
              <Button variant="light">
                <h3>Cart empty :(! Go to add items</h3>
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.product.id} className="container" id="cart">
                <div>
                  <img src={item.product.pictureUrl} alt="sample cell" />
                  <span>
                    <h3>Item:</h3>
                    <p>{item.product.title}</p>
                  </span>
                  <span>
                    <h3>Item price and amount: </h3>
                    <p>
                      $ {item.product.price} x {item.count} units
                    </p>
                  </span>
                  <span>
                    <h3>Total:</h3> <p>$ {item.product.price * item.count}</p>
                  </span>
                </div>
                <div>
                  <Button onClick={() => remove(item.product)} variant="info">
                    Delete product
                  </Button>
                </div>
              </div>
            ))}

            <div className="container">
              <div id="total">
                <span>
                  <h3>Cart Total: $ {totalPrice}</h3>
                  <h3>Total Products: {totalProd}</h3>
                </span>
                <Button onClick={clear} variant="danger">
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Carrito;
