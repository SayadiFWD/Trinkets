import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Description from "./Description";
import ItemsList from "./ItemsList";
import Shipping from "./Shipping";

export default function Item(props) {
  const data = props.data;
  const item = data.find((product) => {
    return String(product.id) === props.match.params.id;
  });

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <div className="nav-links">
      <nav className="nav-links">
      <NavLink exact to={`/item/${props.match.params.id}`}>Description</NavLink>
      <NavLink to={`/item/${props.match.params.id}/shipping`}>Shipping</NavLink>
      </nav>
      </div>
    
   
      <div>
        <Switch>

        <Route
        path="/item/:id/shipping"
        render={() => <Shipping item={item.shipping} />}
      />
          <Route
            path="/item/:id"
            render={() => <Description item={item.description} />}
          />

        </Switch>
      </div>
    </div>
  );
}
