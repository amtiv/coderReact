import { useState } from "react";
import ItemCount from "./ItemCount";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ItemDetail = ({ products }) => {
  const [select, setSelect] = useState(false);

  const onAdd = (unit) => {
    console.log("Test");
    if (unit !== undefined) {
      setSelect(unit);
    }
    toast.success("Added: " + unit + " to the cart!");
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
          {select ? (
            <Link to={"/carrito"}>Go to cart</Link>
          ) : (
            <ItemCount initial={1} stock={products.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
