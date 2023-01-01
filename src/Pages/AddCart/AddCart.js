/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useState } from 'react';
import Chat from '../Chat/Chat';
import Conversation from '../Conversation/Conversation';

const AddCart = ({ product }) => {
  //   const {user} = useContext(AuthContext);


  const [item, setItem] = useState({});
  const [showSidebar, setShowSidebar] = useState(false);
  const user = {
    name: "Nishi",
    _id: "63acc5d5ef95930c9c19b351",
    email: "nishi@gmail.com",
    img: "https://i.pinimg.com/550x/1b/30/03/1b30035e27d189ac55a495d48b888351.jpg"
  }





  return (

    // <!-- drawer init and toggle -->
    <>
      <button
        onClick={() => {
          setShowSidebar(!showSidebar); setItem(product);
        }}
        className="font-family backdrop-blur text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example"
        fill="#2563EB"
        type="submit"
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        Add to cart
        <rect width="100" height="10"></rect>
        <rect y="30" width="100" height="10"></rect>
        <rect y="60" width="100" height="10"></rect>
      </button>
      {showSidebar ? (
        <button
          className="text-sm text-dark cursor-pointer fixed right-5 top-56 z-50 "
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>

      ) : (
        <></>
      )}

      <div
        className={`w-96  bottom-0 right-0 bg-lime-50 text-white fixed h-3/4 z-40 px-2 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full "
          }`}
      >



        <div className='font-family my-3'>
          <label for="title" class="p-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>

          <div className='flex justify-center '>
            <div className='font-family my-2 text-base p-2 px-5 text-gray-900 w-full '>
              Item details
            </div>

            <div className='' >
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg> */}
              <Chat></Chat>

            </div>
          </div>



          <div className='font-family border text-center p-2 px-5 text-gray-900 w-full '>
            {item.productName}
          </div>
          <div className='font-family border text-center p-2 px-5 text-gray-900 w-full '>
            {item.quantity}kg
          </div>
          <div className='font-family border text-center p-2 px-5 text-gray-900 w-full '>
            {item.price} /-
          </div>

          {/* <div className='font-family border text-center p-2 px-5 text-gray-900 w-full '>
           1. product
        </div>
        <div className='font-family border text-center p-2 px-5 text-gray-900 w-full '>
           2. product
        </div><div className='font-family border text-center p-2 px-5 text-gray-900 w-full '>
           3. product
        </div>
        <div className='font-family border text-center p-2 px-5 text-gray-900 w-full '>
           4. product
        </div>
        <div className='font-family border text-center p-2 px-5 text-gray-900 w-full '>
           5. product
        </div> */}


        </div>



        <div className='fixed flex text-gray-900 text-xl p-2 justify-center w-full' >
          <div className='font-family border text-center p-2 px-5 bg-lime-100  w-full cursor-pointer hover:bg-green-100'>
            Place Order
          </div>
          <div className='font-family text-sm border text-center p-2 px-5 bg-green-800 mr-2 text-white  cursor-pointer' >
            {item.price}TK
          </div>



        </div>





      </div>



    </>
  );
};

export default AddCart;