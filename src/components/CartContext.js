import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const cartContext = createContext([]);
const { Provider } = cartContext;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProd, setTotalProd] = useState(0);

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

    let tempProduct = 0;
    let tempPrice = 0;

    tempProduct = totalProd;
    tempProduct += product.price * count;
    setTotalProd(tempProduct);

    tempPrice = totalPrice;
    tempPrice += product.price * count;
    setTotalPrice(tempPrice);
  };

  const remove = (product) => {
    if (isInCart(product)) {
      let tempProduct = 0;
      let tempPrice = 0;

      const AuxCart = cart.filter((item) => item.product !== product);

      AuxCart.forEach((item) => {
        tempPrice += item.product.price * item.count;
        setTotalPrice(tempPrice);

        tempProduct += item.count;
        setTotalProd(tempProduct);
      });
      setCart(AuxCart);
      toast.info(product.title + " removed");
    }
  };

  const clear = () => {
    setCart([]);
    setTotalPrice(0);
    setTotalProd(0);
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
        totalPrice,
        totalProd,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
