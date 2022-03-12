import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {CartContext} from './Context/CartContext';

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


  return (
    <>
      <div className="list-item">
        <h2>{menuItemTitle}</h2>
        <span>19.99</span>
        <div className="d-flex justify-content-center">
          <Button onClick={() => setQty(qty + 1)}>+</Button>
          <div>{qty}</div>
          <Button onClick={() => setQty(qty - 1)}>-</Button>
          <Button onClick={() => addToCart()}>Add to Cart</Button>
        </div>
      </div>
    </>
  );
}

export default ListItem;
