import React from "react";
import { useStore } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../images/logo.png";

const DashMain = () => {
  const store = useStore();
  const user = store.getState().states.user;
  return (
    <div className="bg-white text-black font-family">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          <div className="drawer-content flex flex-col p-5">
            {/* <!-- Page content here --> */}
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side border-solid border-1 border-green-500 rounded ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <div className="flex">
              <img src={logo} className="-mt-4 w-20 mb-5" alt="" />
              <Link
                to="/"
                className="-ml-5  btn btn-ghost normal-case text-2xl md:text-3xl lg:text-3xl"
              >
                Fresh Today
              </Link>
            </div>

            {user?.role === "admin" && (
              <li className="my-3 bg-gradient-to-r from-lime-200  via-green-200 to-lime-200 rounded text-lg font-semibold">
                <Link to="/dashboard/users">Users</Link>
              </li>
            )}
            {user?.role === "vendor" && (
              <li className="my-3 bg-gradient-to-r from-lime-200 via-green-200 to-lime-200 rounded text-lg font-semibold">
                <Link to="/dashboard/products">Products</Link>
              </li>
            )}
            {user?.role === "vendor" && (
              <li className="my-3 bg-gradient-to-r from-lime-200 via-green-200 to-lime-200 rounded text-lg font-semibold">
                <Link to="/dashboard/addProduct">Add product</Link>
              </li>
            )}

            {user?.role === "admin" && (
              <li className="my-3 bg-gradient-to-r from-lime-200 via-green-200 to-lime-200 rounded text-lg font-semibold">
                <Link to="/dashboard/reports">Reports</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashMain;
