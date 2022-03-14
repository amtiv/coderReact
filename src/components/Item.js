import React from "react";
// import ItemCount from "./ItemCount";

const Item = (props) => {
  return (
    <div className="items">
      <img src={props.pictureUrl} alt="celular de muestra" width="200px" />
      <div>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <p>Stock disponible: {props.stock}</p>
        {/* <ItemCount /> */}
      </div>
    </div>
  );
};

export default Item;
