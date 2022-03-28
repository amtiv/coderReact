import React from "react";
import { NavLink } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="items">
      <img src={props.pictureUrl} alt="sample cell" width="200px" />
      <div>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <p>Stock available: {props.stock}</p>
        <NavLink to={`/item/${props.slug}`}>+ See more</NavLink>
      </div>
    </div>
  );
};

export default Item;
