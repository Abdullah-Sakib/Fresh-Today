import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Report = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold ">
          Reported <span className="text-green-500">products</span>
        </h1>
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <BsFillArrowRightSquareFill className="text-3xl text-green-500"></BsFillArrowRightSquareFill>
        </label>
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Seller</th>
              <th>Reporter Email</th>
              <th>Details</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>Avocado</td>
              <td>Elon mask</td>
              <td>reporter@gmail.com</td>
              <td>
                <button className="btn btn-xs rounded btn-success text-white">
                  Details
                </button>{" "}
              </td>
              <td className="text-center">
                <button className="btn btn-xs rounded btn-success text-white">
                  Cancel
                </button>{" "}
                <button className="btn btn-xs rounded btn-error text-white">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="hover">
              <th>2</th>
              <td>Potato</td>
              <td>Elon mask</td>
              <td>reporter@gmail.com</td>
              <td>
                <button className="btn btn-xs rounded btn-success text-white">
                  Details
                </button>{" "}
              </td>
              <td className="text-center">
                <button className="btn btn-xs rounded btn-success text-white">
                  Cancel
                </button>{" "}
                <button className="btn btn-xs rounded btn-error text-white">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="hover">
              <th>3</th>
              <td>Tomato</td>
              <td>Elon mask</td>
              <td>reporter@gmail.com</td>
              <td>
                <button className="btn btn-xs rounded btn-success text-white">
                  Details
                </button>{" "}
              </td>
              <td className="text-center">
                <button className="btn btn-xs rounded btn-success text-white">
                  Cancel
                </button>{" "}
                <button className="btn btn-xs rounded btn-error text-white">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
