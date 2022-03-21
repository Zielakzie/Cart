import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Cart() {
  const { menu, setMenu, notyfication, setNotyfication } =
    useContext(CartContext);

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
      setNotyfication(notyfication - 1);
    }
  };

  const addition = (i) => {
    let prevState = [...menu];
    let prevElement = { ...prevState[i] };
    prevElement.cartQty++;
    prevState[i] = prevElement;
    setMenu(prevState);
    setNotyfication(notyfication + 1);
  };

  const clearCartItem = (i) => {
    let prevState = [...menu];
    let prevElement = { ...prevState[i] };
    let prevNotyfication = notyfication - prevElement.cartQty;
    setNotyfication(prevNotyfication);
    prevElement.cartQty = 0;
    prevState[i] = prevElement;
    setMenu(prevState);
  };

  const renderCheck = notyfication;

  const cartItemsList = () => {
    return (
      <>
        {menu.map((cartItem, i) => (
          <div key={cartItem.name}>
            {cartItem.cartQty > 0 ? (
              <div className="d-flex justify-content-between align-items-center cart-item">
                <p>{`${cartItem.name} x${cartItem.cartQty}`}</p>
                <p>{`${
                  Math.floor(cartItem.price * cartItem.cartQty * 100) / 100
                } zł`}</p>
                <div className="d-flex flex-row">
                  <button className="cart-btn" onClick={() => substraction(i)}>
                    -
                  </button>
                  <button className="cart-btn" onClick={() => addition(i)}>
                    +
                  </button>
                  <div
                    className="icon-bg cart-btn d-flex justify-content-center align-items-center"
                    onClick={() => clearCartItem(i)}
                  >
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
  };

  return (
    <>
      <h1 className="title">Cart</h1>
      {renderCheck > 0 ? cartItemsList() : <p>Add something :)</p>}
      <Link to="/">
        <button className="button-add cart-btn-width-fix text-uppercase">
          Back
        </button>
      </Link>
      {renderCheck > 0 ? (
        <Link to="/checkout">
          <button className="button-add cart-btn-width-fix text-uppercase">
            Checkout
          </button>
        </Link>
      ) : null}
    </>
  );
}

export default Cart;
