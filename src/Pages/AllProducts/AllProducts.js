import React from "react";
import logo from "../../images/cate1.png";
import fruit from "../../images/fruit.png";
import veg from "../../images/veg.png";
import dairy from "../../images/dairy.png";
import meat from "../../images/meat.png";
import fish from "../../images/fish.png";
import bread from "../../images/bread.png";
import juice from "../../images/juice.png";
import rice from "../../images/Rice.png";

const AllProducts = () => {
  return (
    <div className="grid grid-cols-1 ">
      <div className="mx-auto my-5 ">
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
          <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            <div className="flex flex-col md:flex-row items-strech justify-between shadow bg-lime-50 rounded py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
              <div className="flex flex-col justify-center md:w-1/2">
                <h1 className="text-3xl lg:text-4xl  text-gray-800 font-family">
                  <b>The Best Products</b> in Every Category
                </h1>
                <p className="text-base lg:text-xl text-gray-800 mt-4 font-family">
                  Save upto <span className="font-bold mt-3">50%</span>
                </p>
              </div>
              <div className="md:w-1/2 mx-auto">
                <img src={logo} className="rounded w-200" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold my-9 font-family mx-5">
          All Categories
        </h3>
      </div>

      <div className="grid lg:grid-cols-8 lg:mx-auto md:grid-cols-4 sm:grid-cols-2  space-y-4 lg:space-y-0">
        <div className=" w-44 h-44 lg:w-36 lg:h-36 hover:bg-lime-100 cursor-pointer bg-lime-200 shadow text-dark rounded-full md:mx-2 flex justify-center items-center mx-auto">
          <img src={fruit} className="rounded-full w-28 h-28" alt=""></img>
        </div>

        <div className=" w-44 h-44 lg:w-36 lg:h-36 hover:bg-lime-100 cursor-pointer bg-lime-200 shadow text-dark rounded-full md:mx-2 flex justify-center items-center mx-auto">
          <img src={veg} className="rounded-full w-28 h-28" alt=""></img>
        </div>
        <div className=" w-44 h-44 lg:w-36 lg:h-36 hover:bg-lime-100 cursor-pointer bg-lime-200 shadow text-dark rounded-full md:mx-2 flex justify-center items-center mx-auto">
          <img src={dairy} className="rounded-full w-28 h-28" alt=""></img>
        </div>
        <div className=" w-44 h-44 lg:w-36 lg:h-36 hover:bg-lime-100 cursor-pointer bg-lime-200 shadow text-dark rounded-full md:mx-2 flex justify-center items-center mx-auto">
          <img src={meat} className="rounded-full w-28 h-28" alt=""></img>
        </div>
        <div className=" w-44 h-44 lg:w-36 lg:h-36 hover:bg-lime-100 cursor-pointer bg-lime-200 shadow text-dark rounded-full md:mx-2 flex justify-center items-center mx-auto">
          <img src={bread} className="rounded-full w-28 h-28" alt=""></img>
        </div>
        <div className=" w-44 h-44 lg:w-36 lg:h-36 hover:bg-lime-100 cursor-pointer bg-lime-200 shadow text-dark rounded-full md:mx-2 flex justify-center items-center mx-auto">
          <img src={fish} className="rounded-full w-28 h-28" alt=""></img>
        </div>
        <div className=" w-44 h-44 lg:w-36 lg:h-36 hover:bg-lime-100 cursor-pointer bg-lime-200 shadow text-dark rounded-full md:mx-2 flex justify-center items-center mx-auto">
          <img src={juice} className="rounded-full w-28 h-28" alt=""></img>
        </div>
        <div className=" w-44 h-44 lg:w-36 lg:h-36 hover:bg-lime-100 cursor-pointer bg-lime-200 shadow text-dark rounded-full md:mx-2 flex justify-center items-center mx-auto">
          <img src={rice} className="rounded-full w-28 h-28" alt=""></img>
        </div>
      </div>

      <div>03</div>
    </div>
  );
};

export default AllProducts;
