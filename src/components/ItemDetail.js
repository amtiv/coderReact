import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { cartContext } from "./CartContext";
import { toast } from "react-toastify";

const ItemDetail = ({ products }) => {
  const [select, setSelect] = useState(true);
  const { AddToCart } = useContext(cartContext);

  const onAdd = (unit) => {
    setSelect(false);
    toast.success("Added: " + unit + " to the cart!");
    AddToCart(products, unit);
  };

  return (
    <section id="container">
      <div className="detail">
        <img src={products.pictureUrl} width="200px" alt="sample cell" />
        <div>
          <h2>{products.title}</h2>
          <div>
            <h3>Price: $ {products.price}</h3>
          </div>
          <h4 classname="description">{products.description}</h4>
          <p>Stock available: {products.stock}</p>
          <ItemCount initial={1} stock={products.stock} onAdd={onAdd} />
          <br />
          {select || (
            <Link to={"/carrito"}>
              <Button variant="info">Finish my purchase</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
