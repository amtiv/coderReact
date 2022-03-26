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
      <div id="cartBackground">
        {cart.length == 0 ? (
          <Link className="styleRemove flexCart" to="/">
            <Button className="cartIsEmpty dropShadow" color="inherit">
              <h3>Cart empty :(! Go to add items</h3>
            </Button>
          </Link>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.product.id} className="container">
                <div>
                  <img src={item.product.pictureUrl} />
                  <span>
                    <h3>Item:</h3>
                    <p>{item.product.title}</p>
                  </span>
                  <span>
                    <h3>Item Price and Amount: </h3>
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
              <div>
                <h3>Cart Total: $ {totalPrice}</h3>
                <h3>Total Products: {totalProd}</h3>
              </div>
              <Button onClick={clear} variant="danger">
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Carrito;

/*
 <section className="container">
      {cart.length === 0 ? (
        <div className="empty">
          <Link to="/">
            <Button color="info">
              <h2>Cart empty :(! Go to add items</h2>
            </Button>
          </Link>
        </div>
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
                <Button onClick={() => remove(item.product)} variant="danger">
                  Delete from cart
                </Button>{" "}
              </span>
              <Button onClick={clear} variant="info">
                Clear cart
              </Button>
            </div>
          ))}
        </>
      )}
    </section>
    */
