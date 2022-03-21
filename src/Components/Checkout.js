import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  return (
    <>
      <h1 className="title">Checkout</h1>
      <div className="d-flex flex-column inputs-wrapper">
        <input type="text" placeholder="Full name"/>
        <input type="text" placeholder="Adres"/>
        <input type="text" placeholder="Phone Number"/>
        <input type="text" placeholder="Email"/>
      </div>
      <Link to="/cart">
        <button className="button-add cart-btn-width-fix text-uppercase">
          Back
        </button>
      </Link>
      <Link to="#">
        <button className="button-add cart-btn-width-fix text-uppercase">
          Order
        </button>
      </Link>
    </>
  );
}

export default Checkout;
