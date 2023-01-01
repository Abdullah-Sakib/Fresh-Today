import React, { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";

const CartItems = ({ c }) => {
  const [counter, setCounter] = useState(0);
  const [price,setPrice] = useState([]);

 
  const handleQuantity = (e) => {
    if (e === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <li class="flex py-6">
        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={c.image}
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            class="h-full w-full object-cover object-center"
          />
        </div>

        <div class="ml-4 flex flex-1 flex-col">
          <div>
            <div class="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">{c.productName} </a>
              </h3>
              <p class="ml-4">{c.price * counter}/-</p>
            </div>
          </div>

          <div class="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-700">Qty :</p>
            <div className="flex justify-between items-center font-family">
              <BsPlusSquare
                className="text-gray-700"
                onClick={() => {
                  setCounter(counter + 1);
                }}
              ></BsPlusSquare>
              <span className="text-lg mx-2 font-bold text-gray-700 dark:text-gray-200 md:text-sm">
                {counter}
              </span>
              <AiOutlineMinusSquare
                className="text-gray-700"
                onClick={() => handleQuantity(counter)}
              ></AiOutlineMinusSquare>
            </div>

            <div class="flex">
              <button
                type="button"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
      total: 
    </div>
  );
};

export default CartItems;
