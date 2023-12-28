import React from "react";

import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <section id="header">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <div>
          <ul id="navbar">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li >
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
            <a href="#" id="close">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <i className="fa-solid fa-bars" id="bar">
            {" "}
          </i>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
