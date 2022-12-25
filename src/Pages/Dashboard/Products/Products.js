import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Products = () => {
  const products = [
    {
      name: 'Carrot',
      status: 'Fresh',
      category: 'Vegetable',
      price: '200',
    },
    {
      name: 'Carrot',
      status: 'Fresh',
      category: 'Vegetable',
      price: '200',
    },
    {
      name: 'Carrot',
      status: 'Fresh',
      category: 'Vegetable',
      price: '200',
    },
    {
      name: 'Carrot',
      status: 'Fresh',
      category: 'Vegetable',
      price: '200',
    },
    {
      name: 'Carrot',
      status: 'Fresh',
      category: 'Vegetable',
      price: '200',
    },
    {
      name: 'Carrot',
      status: 'Fresh',
      category: 'Vegetable',
      price: '200',
    },
    {
      name: 'Carrot',
      status: 'Fresh',
      category: 'Vegetable',
      price: '200',
    }
  ]

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
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg border-solid border-2 border-green-500">
        <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xl text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 bg-green-200 rounded dark:bg-gray-800">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6 bg-green-200 rounded dark:bg-gray-800">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody>

            {
              products.map((product, id) => <tr key={id} className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-green-200 rounded dark:text-white dark:bg-gray-800">
                  {product.name}
                </th>
                <td className="py-4 px-6">
                  {product.status}
                </td>
                <td className="py-4 px-6 bg-green-200 rounded dark:bg-gray-800">
                  {product.category}
                </td>
                <td className="py-4 px-6">
                  ${product.price}
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
