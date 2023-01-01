import React, { useEffect, useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useStore } from "react-redux";

const Products = () => {
  const store = useStore();
  const user = store.getState().states.user;

  const [vendorProducts, setVendorProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/vendor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setVendorProducts(data));
  }, [user?.email]);

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
              <th className=" text-center bg-green-200 text-lg ">Action</th>
            </tr>
          </thead>
          <tbody>
            {vendorProducts?.map((product) => (
              <tr
                key={product?._id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="py-4 px-6 text-xl  border  text-center ">
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={product?.image} alt="" />
                    </div>
                  </div>
                </td>
                <th scope="row" className="text-xl text-center">
                  {product?.productName}
                </th>
                <td className="py-4 px-6 text-xl  border  text-center ">
                  {product.category}
                </td>
                <td className="py-4 px-6 text-xl  border  text-center ">
                  ${product.price}
                </td>
                <td className="py-4 px-6 text-xl  border  text-center ">
                  <button className=" bg-gradient-to-r from-lime-200  via-green-100 to-lime-200 rounded-lg px-4 py-2 text-dark">
                    Delete
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

export default Products;
