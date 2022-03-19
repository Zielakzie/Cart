import "./App.css";
import React, { useState } from "react";
import ListItem from "./Components/ListItem";
import Cart from "./Components/Cart";
import { CartContext } from "./Context/CartContext";
import Navbar from "./Components/Navbar";

import pizzaPepperoni from "./img/pizza-pepperoni.png";
import pizzaHawajska from "./img/pizza-hawajska.png";

function App() {
  const [menu, setMenu] = useState([
    {
      name: "Pizza Pepperoni",
      price: 29.99,
      image: pizzaPepperoni,
      selection: 0,
      cartQty: 0,
    },
    {
      name: "Pizza Hawajska",
      price: 30.99,
      image: pizzaHawajska,
      selection: 0,
      cartQty: 0,
    },
  ]);

  const [notyfication, setNotyfication] = useState(0);

  return (
    <div className="App">
      <CartContext.Provider value={{ menu, setMenu, notyfication, setNotyfication }}>
        <Navbar />
        <h1>Menu</h1>
        <ListItem />
        <Cart />
      </CartContext.Provider>
    </div>
  );
}

export default App;
