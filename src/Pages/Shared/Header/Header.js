import React from "react";
import { useStore } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";

// This part is contributed by Tasfi

const Header = () => {
  const store = useStore();
  const user = store.getState().states.user;
  const navigate = useNavigate();

  const handleLogout = () => {
    store.dispatch({ type: "removeUser" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="navbar print:hidden bg-gradient-to-r from-lime-50 to-lime-100 font-family text-2xl">
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
              <Link to="/AllProducts">Products</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
            {user?.role === "customer" && (
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            )}
            {(user?.role === "admin" || user?.role === "vendor") && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <img src={logo} className="-mt-4 w-20 " alt="" />
        <Link
          to="/"
          className="-ml-5 btn btn-ghost normal-case text-2xl md:text-3xl lg:text-3xl"
        >
          Fresh Today
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          // className="menu menu-horizontal px-1"
          className="menu-horizontal my-4"
        >
          <li className="mr-4 border-b-4 border-lime-50 hover:border-green-700">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4 border-b-4 border-lime-50 hover:border-green-700">
            <Link to="/AllProducts">Products</Link>
          </li>
          <li className="mr-4 border-b-4 border-lime-50 hover:border-green-700">
            <Link to="/aboutUs">About Us</Link>
          </li>
          {user?.role === "customer" && (
            <li className="mr-4 border-b-4 border-lime-50 hover:border-green-700">
              <Link to="/cart">Cart</Link>
            </li>
          )}
          {(user?.role === "admin" || user?.role === "vendor") && (
            <li className="mr-4 border-b-4 border-lime-50 hover:border-green-700">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-ghost text-sm md:text-xl normal-case"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/Login"
            className="btn btn-ghost text-sm md:text-xl normal-case"
          >
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
