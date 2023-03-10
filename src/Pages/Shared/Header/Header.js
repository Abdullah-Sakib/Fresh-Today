import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";

// This part is contributed by Tasfi

const Header = () => {
  return (
    <div className="navbar bg-gradient-to-r from-lime-50 to-lime-100 font-family text-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        </div>
        <img src={logo} className="-mt-4" alt="" />
        <Link to="/" className="-ml-9 btn btn-ghost normal-case text-4xl">
          Fresh Today
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/Login" className="btn btn-ghost text-2xl normal-case">
          Log in{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
