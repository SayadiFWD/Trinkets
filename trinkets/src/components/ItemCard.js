import React from "react";
import {Link} from "react-router-dom"

const ItemCard = (props) => {
  const item = props.item;
  return (
    <Link to={`/item/${item.id}`} className="item-card">
      <img className="item-list-image" src={item.imageUrl} alt={item.name} />
      <p>Name: {item.name}</p>
      <p>$ {item.price}</p>
    </Link>
  );
};
export default ItemCard;
