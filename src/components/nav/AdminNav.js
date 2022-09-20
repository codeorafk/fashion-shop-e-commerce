import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav__item">
        <NavLink activeClassName="nav__selected"  to="/admin/dashboard" className="nav-link">
          Dashboard
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink activeClassName='nav__selected' to="/admin/product" className="nav-link">
          Product
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink activeClassName='nav__selected' to="/admin/products" className="nav-link">
          Products
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink activeClassName='nav__selected' to="/admin/category" className="nav-link">
          Category
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink activeClassName='nav__selected' to="/admin/sub" className="nav-link">
          Sub Category
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink activeClassName='nav__selected' to="/admin/coupon" className="nav-link">
          Coupon
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
