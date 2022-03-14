import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../Context/CartContext";
import pizzaPepperoni from "../img/pizza-pepperoni.png";
import pizzaHawajska from "../img/pizza-hawajska.png";
import "./ListItem.css";

function ListItem() {
  const [menu, setMenu] = useState([
    {
      name: "Pizza Pepperoni",
      price: 29.99,
      image: pizzaPepperoni,
      qty: 0,
    },
    {
      name: "Pizza Hawajska",
      price: 30.99,
      image: pizzaHawajska,
      qty: 0,
    },
  ]);

  const addToCart = <button className="button-add">Add</button>;

  const substraction = (i) => {
    if (menu[i].qty > 0) {
      let prevState = [...menu];
      let prevElement = { ...prevState[i] };
      prevElement.qty--;
      prevState[i] = prevElement;
      setMenu(prevState);
    }
  };

  const addition = (i) => {
    let prevState = [...menu];
    let prevElement = { ...prevState[i] };
    prevElement.qty++;
    prevState[i] = prevElement;
    setMenu(prevState);
  };

  return (
    <>
      {menu.map((menuItem, i) => (
        <div
          key={i}
          className="list-item d-flex justify-content-between align-items-center"
        >
          <img src={menuItem.image} alt={menuItem.name} />
          <div>
            <h2>{menuItem.name}</h2>
            <h3>{menuItem.price} zł</h3>
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex">
              <button className="button-qty" onClick={() => substraction(i)}>
                -
              </button>
              <div>{menuItem.qty}</div>
              <button className="button-qty" onClick={() => addition(i)}>
                +
              </button>
            </div>
            {menuItem.qty >= 1 ? addToCart : null}
          </div>
        </div>
      ))}
    </>
  );
}

export default ListItem;
