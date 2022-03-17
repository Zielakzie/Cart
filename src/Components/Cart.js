import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";

function Cart() {
  const { menu, setMenu } = useContext(CartContext);

  //Total amount
  let sum = 0;
  const summary = () => {
    for (let i = 0; i < menu.length; i++) {
      sum = sum + menu[i].cartQty * menu[i].price;
    }
    if (sum <= 0) {
      return null;
    } else return `Total ${Math.floor(sum * 100) / 100} zł`;
  };

  //Add and Substract cartItem qty
  const substraction = (i) => {
    if (menu[i].cartQty > 0) {
      let prevState = [...menu];
      let prevElement = { ...prevState[i] };
      prevElement.cartQty--;
      prevState[i] = prevElement;
      setMenu(prevState);
    }
  };

  const addition = (i) => {
    let prevState = [...menu];
    let prevElement = { ...prevState[i] };
    prevElement.cartQty++;
    prevState[i] = prevElement;
    setMenu(prevState);
  };

  return (
    <>
      <h1>Cart</h1>
      {menu.map((cartItem, i) => (
        <div key={cartItem.name}>
          {cartItem.cartQty > 0 ? (
            <div>
              <strong>{cartItem.name}</strong>
              {` x${cartItem.cartQty} 
              ${Math.floor((cartItem.price * cartItem.cartQty)*100)/100} zł`}
              <button
                className="button-cartQty"
                onClick={() => substraction(i)}
              >
                -
              </button>
              <button className="button-cartQty" onClick={() => addition(i)}>
                +
              </button>
            </div>
          ) : null}
        </div>
      ))}
      <p>{summary()}</p>
    </>
  );
}

export default Cart;
