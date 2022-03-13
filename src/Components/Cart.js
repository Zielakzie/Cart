import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";

function Cart() {
  const { cartQty, setCartQty, cartItem, setCartItem } =
    useContext(CartContext);

  const clearCartItem = () => {
    setCartItem("");
    setCartQty(0);
  };

  const cartItemElement = (
    <div>
      <p>{`${cartItem} ${cartQty}`}</p>
      <Button onClick={clearCartItem}>Clear</Button>
    </div>
  );

  return (
    <>
      <h1>Cart</h1>
      {cartQty >= 1 ? cartItemElement : null}
    </>
  );
}

export default Cart;
