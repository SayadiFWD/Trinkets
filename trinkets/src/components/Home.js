import React from "react"

const Home =(props)=>{
    console.log(props)
    
    return(
        <div className="home-wrapper">
        <img className="home-image" src="https://source.unsplash.com/F6-U5fGAOik" alt=""/>
        <button className="md-button shop-button">Shop</button>
        </div>
    )
}
export default Home;