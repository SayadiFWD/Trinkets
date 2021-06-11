import React from "react"
import {Route, Link} from "react-router-dom"
import "./styles.css"
import Home from "./components/Home"
import ItemsList from "./components/ItemsList"
import Item from "./components/Item"
import items from "./data"

function App() {
  return (
    <div className="App">
    <nav>
    <h1 className="store-header">Ahmad's Trinkets</h1>
    <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/item">Shop</Link>
    </div>
    
    </nav>
      <header className="App-header">
      < Route exact path="/" component={Home}/>
      <Route exact path="/item" render={()=>{
        return <ItemsList data={items}/>
      }}/>
      <Route path="/item/:id" render={(props)=>{
        return <Item {...props} data ={items}/>
      }}/>
    
      </header>
    </div>
  );
}

export default App;
