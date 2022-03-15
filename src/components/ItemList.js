import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <ul>
      {props.items.map((product) => {
        return (
          <Item
            key={product.id}
            title={product.title}
            price={product.price}
            pictureUrl={product.pictureUrl}
            stock={product.stock}
            slug={product.slug}
            type={product.type}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
