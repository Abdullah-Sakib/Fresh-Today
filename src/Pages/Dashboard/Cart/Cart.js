import React, { useState } from "react";
import { useStore } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const store = useStore();
  const cart = JSON.parse(localStorage.getItem("cart"));
  
  console.log(cart);

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  store.dispatch({ type: "setTotalPrice", payload: totalPrice });
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  
  return (
    <div className=" font-family m-5 md:m-10 ">
      <div className="flex justify-between items-center">
        <h1 className="mb-5 text-3xl font-semibold ">
          My <span className="text-green-500">orders</span>
        </h1>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg border-solid border rounded ">
        <table className="table  w-full">
          <thead className=" rounded ">
            <tr className="bg-green-100 text-center">
              <th className="bg-green-200 text-lg ">Product name</th>
              <th className="bg-green-200 text-lg "> Quantity</th>
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
                  {product.productName}
                </th>
                <td className="py-4 px-6 text-xl  border  text-center ">
                  {product.quantity}
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

            <tr className="bg-green-400 text-center">
              <th colSpan={3} className="bg-green-400 text-lg ">
                Total
              </th>
              <th className="bg-green-400 text-lg ">{totalPrice}</th>
              <th className="text-center bg-green-400 text-lg">
                <button className="btn btn-active">
                  <Link to="/payment">Pay Now</Link>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
