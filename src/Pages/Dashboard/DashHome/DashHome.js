import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const DashHome = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold ">
          Dashboard <span className="text-green-500">Home</span>
        </h1>
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <BsFillArrowRightSquareFill className="text-3xl text-green-500"></BsFillArrowRightSquareFill>
        </label>
      </div>
    </div>
  );
};

export default DashHome;
