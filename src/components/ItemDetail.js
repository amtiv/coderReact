import { Button } from "react-bootstrap";

const ItemDetail = ({ products }) => {
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
          <Button variant="warning">Add to cart</Button>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
