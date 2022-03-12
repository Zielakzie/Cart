import "./App.css";
import React, {useState} from "react";
import ListItem from "./ListItem";
import Cart from "./Cart";
import { CartContext } from "./Context/CartContext";

function App() {
  const [qty, setQty] = useState(0);
  const [cartItem, setCartItem] = useState("");
  const [cartQty, setCartQty] = useState(0);

  return (
    <div className="App">
      <CartContext.Provider
        value={{qty, setQty, cartItem, setCartItem, cartQty, setCartQty}}
      >
        <h1>Menu</h1>
        <ListItem />
        <Cart />
      </CartContext.Provider>
    </div>
  );
}

export default App;
