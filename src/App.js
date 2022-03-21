import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListItem from "./Components/ListItem";
import Cart from "./Components/Cart";
import { CartContext } from "./Context/CartContext";
import Navbar from "./Components/Navbar";
import Checkout from "./Components/Checkout"

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
    <Router>
      <div className="App">
        <CartContext.Provider
          value={{ menu, setMenu, notyfication, setNotyfication }}
        >
          <Navbar />
          <Routes>
          <Route exact path='/' element={<ListItem/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
          </Routes>
        </CartContext.Provider>
      </div>
    </Router>
  );
}

export default App;
