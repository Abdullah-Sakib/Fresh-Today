import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Products = () => {
  // product array created
  const products = [
    {
      name: "Carrot",
      status: "Fresh",
      category: "Vegetable",
      price: "200",
    },
    {
      name: "Carrot",
      status: "Fresh",
      category: "Vegetable",
      price: "200",
    },
    {
      name: "Carrot",
      status: "Fresh",
      category: "Vegetable",
      price: "200",
    },
    {
      name: "Carrot",
      status: "Fresh",
      category: "Vegetable",
      price: "200",
    },
    {
      name: "Carrot",
      status: "Fresh",
      category: "Vegetable",
      price: "200",
    },
    {
      name: "Carrot",
      status: "Fresh",
      category: "Vegetable",
      price: "200",
    },
    {
      name: "Carrot",
      status: "Fresh",
      category: "Vegetable",
      price: "200",
    },
  ];

  return (
    <div className=" font-family">
      <div className="flex justify-between items-center">
        <h1 className="mb-5 text-3xl font-semibold ">
          Seller <span className="text-green-500">products</span>
        </h1>
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <BsFillArrowRightSquareFill className="text-3xl text-green-500"></BsFillArrowRightSquareFill>
        </label>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
        <table className="table  w-full">
          <thead className=" rounded ">
            <tr className="bg-green-100 text-center">
              <th className="bg-green-200 text-lg ">Product name</th>
              <th className="bg-green-200 text-lg "> Status</th>
              <th className="bg-green-200 text-lg ">Category</th>
              <th className=" text-center bg-green-200 text-lg "> Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, id) => (
              <tr
                key={id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <th scope="row" className="text-xl text-center">
                  {product.name}
                </th>
                <td className="py-4 px-6 text-xl  border  text-center ">
                  {product.status}
                </td>
                <td className="py-4 px-6 text-xl  border  text-center ">
                  {product.category}
                </td>
                <td className="py-4 px-6 text-xl  border  text-center ">
                  ${product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
