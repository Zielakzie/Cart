import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {CartContext} from '../Context/CartContext';
import pizzaPepperoni from '../img/pizza-pepperoni.png'
import "./ListItem.css";


function ListItem()  {
  const {qty, setQty, setCartItem, cartQty, setCartQty} = useContext(CartContext);
  const menuItemTitle = "Pizza Pepperoni";
  const addToCart = () => {
    if (qty >= 1) {
      setCartItem(`${menuItemTitle}`);
      setCartQty(cartQty + qty);
      setQty(0);
    }
  };

  const addButton = <button className="button-add" onClick={() => addToCart()}>Add</button>

  return (
    <>
      <div className="list-item d-flex justify-content-between align-items-center">
        <img src={pizzaPepperoni} alt="pizza pepperoni" />
        <div>
          <h2>{menuItemTitle}</h2>
          <h3>29.99zł</h3>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex">
          <button className="button-qty" onClick={() => setQty(qty - 1)}>-</button>
          <div>{qty}</div>
          <button className="button-qty" onClick={() => setQty(qty + 1)}>+</button>
          </div>
          {qty >=1 ? addButton : null}
        </div>
      </div>
    </>
  );
}

export default ListItem;
