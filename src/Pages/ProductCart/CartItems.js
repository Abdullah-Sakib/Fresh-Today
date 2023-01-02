import React from "react";

const CartItems = ({ item }) => {
  
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
              <p className="ml-4">{item.price}/-</p>
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
