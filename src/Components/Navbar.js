import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="d-flex justify-content-between align-items-center">
      <FontAwesomeIcon icon={faBars} className="icon"/>
      <h1>Foodie</h1>
      <FontAwesomeIcon icon={faCartShopping} className="icon"/>
    </nav>
  );
}

export default Navbar;
