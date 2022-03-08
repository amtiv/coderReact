import React from "react";
import ItemCount from "./ItemCount";

const Item = (props) => {
  return (
    <div>
      <img src={props.pictureUrl} width="200px" />
      <div>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <p>Stock disponible: {props.stock}</p>
        <ItemCount />
      </div>
    </div>
  );
};

export default Item;
