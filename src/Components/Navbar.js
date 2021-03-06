import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const { notyfication } = useContext(CartContext);

  const cartSummary = (
    <div className="notification-dot">
      <p>{notyfication}</p>
    </div>
  );

  return (
    <nav className="d-flex justify-content-between align-items-center">
      <FontAwesomeIcon icon={faBars} className="icon" />
      <Link to="/">
        <h1>Foodie</h1>
      </Link>
      <Link to="/cart">
        <div className="mini-cart-border d-flex justify-content-center align-items-center">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="icon faCartShopping"
          />
          {notyfication < 1 ? null : cartSummary}
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
