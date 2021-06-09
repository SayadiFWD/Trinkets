import React from "react"
import item from "../data"

import ItemCard from "./ItemCard"

const ItemsList =()=>{
    return(
        <div className="items-list-wrapper">
        {item.map(items =>(
            <div className="item-card" key={item.id}>
            <ItemCard item ={items}/>
            </div>
        ))}
        </div>
    )
}

export default ItemsList;