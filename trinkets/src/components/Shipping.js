import React from "react"
import Item from "./Item"


export default function(props){
   
    return(
        <p className="item-description">
        {props.item}
        </p>
    )
}