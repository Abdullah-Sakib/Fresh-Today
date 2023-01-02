import React, { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";

const CartItems = ({ item, handleQuantity, counter, setCounter }) => {
  // const [counter, setCounter] = useState(1);

  // const handleQuantity = (e) => {
  //   if (e === 0) {
  //     setCounter(0);
  //   } else {
  //     setCounter(counter - 1);
  //   }
  // };

  return (
    <div>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={item.image}
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <span>{item.productName} </span>
              </h3>
              <p className="ml-4">{item.price * counter}/-</p>
            </div>
          </div>

          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-700">Qty :</p>
            <div className="flex justify-between items-center font-family">
              <button
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                <BsPlusSquare className="text-gray-700  h-5 w-5"></BsPlusSquare>
              </button>
              <span className="text-lg mx-3 font-bold text-gray-700 dark:text-gray-200 md:text-sm">
                {counter}
              </span>
              <button onClick={() => handleQuantity(counter)}>
                <AiOutlineMinusSquare className="text-gray-700 h-6 w-6"></AiOutlineMinusSquare>
              </button>
            </div>

          </div>
        </div>
      </li>
      total:
      total:
    </div>
  );
};

export default CartItems;
