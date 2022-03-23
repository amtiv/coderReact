import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const cartContext = createContext([]);
const { Provider } = cartContext;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddToCart = (product, count) => {
    let cartProduct = { product, count };
    let AuxCart = [];

    if (isInCart(product)) {
      cartProduct = cart.find((item) => item.product === product);
      cartProduct.count = cartProduct.count + count;
      AuxCart = [...cart];
    } else {
      AuxCart = [cartProduct, ...cart];
    }
    setCart(AuxCart);
  };

  const remove = (product) => {
    if (isInCart(product)) {
      const AuxCart = cart.filter((item) => item.product !== product);
      setCart(AuxCart);
      toast.info(product.title + " removed");
    }
  };

  const clear = () => {
    setCart([]);
    toast.info("Cart deleted.");
  };

  const isInCart = (product) => {
    return cart && cart.some((item) => item.product === product);
  };

  return (
    <Provider
      value={{
        cart,
        AddToCart,
        remove,
        clear,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
