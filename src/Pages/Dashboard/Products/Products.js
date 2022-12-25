import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Products = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold ">
          Seller <span className="text-green-500">products</span>
        </h1>
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <BsFillArrowRightSquareFill className="text-3xl text-green-500"></BsFillArrowRightSquareFill>
        </label>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Color
              </th>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">Laptop</td>
              <td className="py-4 px-6">$2999</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                Laptop PC
              </td>
              <td className="py-4 px-6">$1999</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                Accessories
              </td>
              <td className="py-4 px-6">$99</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Google Pixel Phone
              </th>
              <td className="py-4 px-6">Gray</td>
              <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">Phone</td>
              <td className="py-4 px-6">$799</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Apple Watch 5
              </th>
              <td className="py-4 px-6">Red</td>
              <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                Wearables
              </td>
              <td className="py-4 px-6">$999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
