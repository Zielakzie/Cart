import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { menu } = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      {menu.map((cartItem, i) => (
        <div>
          {cartItem.cartQty > 0 ? (
            <p>
              <strong>{cartItem.name}</strong> x{cartItem.cartQty} {cartItem.price * cartItem.cartQty} zł
            </p>
          ) : null}
          
        </div>
      ))}
    </>
  );
}

export default Cart;
