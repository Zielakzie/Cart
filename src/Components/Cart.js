import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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

  const clearCartItem = (i) => {
    let prevState = [...menu];
    let prevElement = { ...prevState[i] };
    prevElement.cartQty = 0
    prevState[i] = prevElement;
    setMenu(prevState);
  }

  return (
    <>
      <h1>Cart</h1>
      {menu.map((cartItem, i) => (
        <div key={cartItem.name}>
          {cartItem.cartQty > 0 ? (
            <div className="d-flex justify-content-between align-items-center cart-item">
              <p>{`${cartItem.name} x${cartItem.cartQty}`}</p>
              <p>{`${Math.floor(cartItem.price * cartItem.cartQty * 100) / 100} zł`}</p>
              <div className="d-flex flex-row">
                <button className="cart-btn" onClick={() => substraction(i)}>
                  -
                </button>
                <button className="cart-btn" onClick={() => addition(i)}>
                  +
                </button>
                <div className="icon-bg cart-btn d-flex justify-content-center align-items-center" onClick={() => clearCartItem(i)}>
                  <FontAwesomeIcon icon={faTrash} className="cart-icon" />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ))}
      <div className="divider"></div>
      <p className="summary">{summary()}</p>
    </>
  );
}

export default Cart;
