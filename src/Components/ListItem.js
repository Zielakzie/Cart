import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

import "./ListItem.css";

function ListItem() {
  const { menu, setMenu } =
    useContext(CartContext);

  const substraction = (i) => {
    if (menu[i].selection > 0) {
      let prevState = [...menu];
      let prevElement = { ...prevState[i] };
      prevElement.selection--;
      prevState[i] = prevElement;
      setMenu(prevState);
    }
  };

  const addition = (i) => {
    let prevState = [...menu];
    let prevElement = { ...prevState[i] };
    prevElement.selection++;
    prevState[i] = prevElement;
    setMenu(prevState);
  };

  const handleAddToCart = (i) => {
    if (menu[i].selection >= 1) {
      let prevState = [...menu];
      let prevElement = { ...prevState[i] };
      prevElement.cartQty += prevElement.selection;
      prevState[i] = prevElement;
      setMenu(prevState);
    }
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
              <button className="button-selection" onClick={() => substraction(i)}>
                -
              </button>
              <div>{menuItem.selection}</div>
              <button className="button-selection" onClick={() => addition(i)}>
                +
              </button>
            </div>
            <button className="button-add" onClick={() => handleAddToCart(i)}>
              Add
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ListItem;
