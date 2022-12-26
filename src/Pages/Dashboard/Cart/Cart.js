import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Cart = () => {
  const cart = [
    {
      name: "carrot",
      Quality: "flesh",
      category: "vegetable",
      price: "15",
      isPaid: true,
    },
    {
      name: "carrot",
      Quality: "flesh",
      category: "vegetable",
      price: "15",
      isPaid: true,
    },
    {
      name: "carrot",
      Quality: "flesh",
      category: "vegetable",
      price: "15",
      isPaid: true,
    },
    {
      name: "carrot",
      Quality: "flesh",
      category: "vegetable",
      price: "15",
      isPaid: true,
    },
    {
      name: "carrot",
      Quality: "flesh",
      category: "vegetable",
      price: "15",
      isPaid: true,
    },
    {
      name: "carrot",
      Quality: "flesh",
      category: "vegetable",
      price: "15",
      isPaid: true,
    },
    {
      name: "carrot",
      Quality: "flesh",
      category: "vegetable",
      price: "15",
      isPaid: true,
    },
  ];
  return (
    <div className=" font-family">
      <div className="flex justify-between items-center">
        <h1 className="m-5 text-3xl font-semibold ">
          Cart <span className="text-green-500">products</span>
        </h1>
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <BsFillArrowRightSquareFill className="text-3xl text-green-500"></BsFillArrowRightSquareFill>
        </label>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg border-solid border rounded ">
        <table className="table  w-full">
          <thead className=" rounded ">
            <tr className="bg-green-100 text-center">
              <th className="bg-green-200 text-lg ">Product name</th>
              <th className="bg-green-200 text-lg "> Quality</th>
              <th className="bg-green-200 text-lg ">Category</th>
              <th className="bg-green-200 text-lg "> Price</th>
              <th className="text-center bg-green-200 text-lg">
                Payment status
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, id) => (
              <tr key={id}>
                <th scope="row" className="text-xl text-center">
                  {product.name}
                </th>
                <td className="py-4 px-6 text-xl  border  text-center ">
                  {product.Quality}
                </td>
                <td className="text-xl text-center">{product.category}</td>
                <td className="py-4 px-6 border text-xl text-center">
                  ${product.price}
                </td>
                <td className="flex justify-center">
                <button className=" bg-gradient-to-r from-lime-200  via-green-100 to-lime-200 rounded-lg px-4 py-2 text-dark">
                  {product.isPaid ? "Paid" : "Pay Now"}
                </button>

                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
