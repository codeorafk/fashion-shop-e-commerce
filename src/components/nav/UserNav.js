import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"

const UserNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav__item">
        <NavLink activeClassName="nav__selected" to="/user/history" className="nav-link">
          History
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink activeClassName="nav__selected" to="/user/password" className="nav-link">
          Password
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink activeClassName="nav__selected" to="/user/wishlist" className="nav-link">
          Wishlist
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default UserNav;
