import React from "react"


import ItemCard from "./ItemCard"

const ItemsList =(props)=>{
   const item = props.data
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