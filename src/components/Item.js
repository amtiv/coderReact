import React from "react";
import { NavLink } from "react-router-dom";
// import ItemCount from "./ItemCount";

const Item = (props) => {
  return (
    <div className="items">
      <img src={props.pictureUrl} alt="sample cell" width="200px" />
      <div>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <p>Stock disponible: {props.stock}</p>
        <NavLink to={`/item/${props.slug}`}>+ Ver mas</NavLink>
        {/* <ItemCount /> */}
      </div>
    </div>
  );
};

export default Item;
