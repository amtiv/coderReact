const ItemDetail = (props) => {
  return (
    <div className="detail">
      <h2>Item Description:</h2>
      {props.products.description}
    </div>
  );
};

export default ItemDetail;
