import React from "react";
import motto from "../../../images/motto.png";

const Motto = () => {
  return (
    <div className="flex items-center justify-between w-full mt-44 ">
      <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-gradient-to-r from-lime-200 via-green-100 to-lime-300  shadow p-9">
        <img src={motto} alt="/" className="h-64 mx-auto lg:mx-0 "></img>
        <div>
          <h1 class="text-5xl text-dark font-bold font-family mt-20 md:mt-0">
            Our motto is serving fresh ingredients your way everyday!
          </h1>
        </div>
      </div>
    </div>

    //   bg-gradient-to-r from-lime-200 via-green-100 to-lime-300
  );
};

export default Motto;
