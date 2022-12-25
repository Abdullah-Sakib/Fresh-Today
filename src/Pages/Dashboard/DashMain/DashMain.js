import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../../images/logo.png'

const DashMain = () => {
  
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
        <div className="drawer-side border-solid border-2 border-green-500 rounded ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
            <Link className="" to="/"> <img src={logo} className="-mt-4 w-20 " alt="This is logo" /> <p className="font-family normal-case text-2xl md:text-3xl lg:text-3xl">Fresh Today</p> </Link>
            </li>

            <li className="my-3 bg-green-200 rounded text-lg font-semibold">
              <Link to="/dashboard/users">Users</Link>
            </li>
            <li className="my-3 bg-green-200 rounded text-lg font-semibold"> 
              <Link to="/dashboard/products">Products</Link>
            </li>
            <li className="my-3 bg-green-200 rounded text-lg font-semibold">
              <Link to="/dashboard/cart">Cart</Link>
            </li>
            <li className="my-3 bg-green-200 rounded text-lg font-semibold">
              <Link to="/dashboard/reports">Reports</Link>
            </li>

          </ul>

        </div>
      </div>
    </div>

  );

};

export default DashMain;
