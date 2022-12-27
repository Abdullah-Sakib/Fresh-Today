import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Report = () => {
  return (
    <div className=" font-family">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold ">
          Reported <span className="text-green-500">products</span>
        </h1>
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <BsFillArrowRightSquareFill className="text-3xl text-green-500"></BsFillArrowRightSquareFill>
        </label>
      </div>
      <div className=" bg-green-100 rounded overflow-x-auto mt-5">
        <table className="table  w-full">
          <thead className=" rounded ">
            <tr className="bg-green-100">
              <th className="bg-green-200 text-lg "></th>
              <th className="bg-green-200 text-lg ">Product</th>
              <th className="bg-green-200 text-lg ">Seller</th>
              <th className="bg-green-200 text-lg ">Reporter Email</th>
              <th className="bg-green-200 text-lg ">Details</th>
              <th className="bg-green-200 text-lg ">Action</th>
              <th className="text-center bg-green-200 text-lg">Drop</th>
            </tr>
          </thead>
          <tbody className="border ">
            <tr className="text-lg">
              <th>1</th>
              <td>Avocado</td>
              <td>Elon mask</td>
              <td>reporter@gmail.com</td>
              <td>
                <button className="bg-gradient-to-r from-lime-200  via-green-100 to-lime-200 rounded-lg px-4 py-2 text-dark">
                  Details
                </button>{" "}
              </td>
              <td className="">
              <div className="mx-5 cursor-pointer">
                <svg className="w-9 h-9 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
              </td>
              <td className="text-center">
              <div className="flex justify-center  cursor-pointer">
                <svg className="w-9 h-9 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </div>
              </td>
            </tr>
            <tr className="text-lg">
              <th>2</th>
              <td>Potato</td>
              <td>Elon mask</td>
              <td>reporter@gmail.com</td>
              <td>
              <button className="bg-gradient-to-r from-lime-200  via-green-100 to-lime-200 rounded-lg px-4 py-2 text-dark">
                  Details
                </button>{" "}
              </td>
              <td className="">
              <div className="mx-5 cursor-pointer">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                
              </td>
              <td className="text-center">
               
                <div className="flex justify-center cursor-pointer">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </div>
               
              </td>
            </tr>
            <tr className="text-lg">
              <th>3</th>
              <td>Tomato</td>
              <td>Elon mask</td>
              <td>reporter@gmail.com</td>
              <td>
              <button className="bg-gradient-to-r from-lime-200  via-green-100 to-lime-200 rounded-lg px-4 py-2 text-dark">
                  Details
                </button>{" "}
              </td>
              <td className="">
                <div className="mx-5 cursor-pointer">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                
              </td>
              <td className="text-center">
              <div className="flex justify-center cursor-pointer">
                <svg className="w-9 h-9 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
