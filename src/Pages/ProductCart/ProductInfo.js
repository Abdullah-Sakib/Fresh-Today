import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useStore } from "react-redux";
import { CartProvider } from "react-use-cart";
import { useCart } from "react-use-cart";
import CartItems from "./CartItems";
import pa from "../../images/pa.png"

// This part is contributed by Ankan Halder

const ProductInfo = () => {
  const products = useLoaderData();
  const store = useStore();

  const user = store.getState().states.user;

  //    console.log(item);

  const [cart, setCart] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const handleCart = (product) => {
    const newCart = [...cart, product];

    setCart(newCart);
    console.log(cart);
  };
  return (
    <div className="w-11/12 mx-auto font-family">
      {/* <div className="card w-full my-20 bg-base-100 shadow-xl">
        <figure>
          <img
            className="animate-bounce"
            style={{ width: "500px", height: "500px" ,marginTop:"35px"}}
            src={pa}
            alt="Shoes"
          />
        </figure>
      
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold w-1/2">
              {products[0]?.productName}
            </h2>
            <p className="w-1/2 text-lg text-right">See Reviews</p>
          </div>
        </div>
      </div> */}
      <section
  class="relative bg-[url(https://ramarama.my/wp-content/uploads/2020/11/fresh-food-groceries-tray-box-wood-tabletop-banner-background-scaled.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Explore the best items

        <strong class="block font-extrabold text-green-700">
          From here
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
       
      </div>
    </div>
  </div>
</section>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 my-40">
        {products?.map((product) => (
          <div
            key={product._id}
            className="flex max-w-md overflow-hidden  rounded-lg  dark:bg-gray-800"
          >
            <div class="mt-5 flex items-center">
              <div class="container bg-gray-100 mx-auto p-6 bg-white max-w-sm rounded-2xl overflow-hidden shadow hover:shadow-2xl transition duration-300">
                <img class="rounded-xl" src={product.image} alt="" />
                <div class="flex justify-between items-center">
                  <div>
                    <h1 class="mt-5 text-2xl font-semibold">
                      {product.productName}
                    </h1>
                    <p class="mt-2">price: {product.price}/-</p>
                    <p class="mt-2">Available {product.quantity} kg</p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        handleCart(product);
                        setShowSidebar(true);
                      }}
                      class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="w-2/3 p-4 md:p-4">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                {product.productName}
              </h1>

              <h1 className="text-md font-bold text-gray-700 dark:text-gray-200 md:text-md">
                from {product.price} <span className="text-sm">Tk</span>
              </h1>
              <h1 className="text-sm font-bold text-gray-500 dark:text-gray-200 md:text-sm">
                Available {product.quantity} kg
              </h1>
              <div className="flex justify-between mt-10 item-center">
              
                <button
                  onClick={() => {
                   handleCart(product);
                   setShowSidebar(true)
                  }}
                  className="font-family backdrop-blur text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  data-drawer-target="drawer-example"
                  data-drawer-show="drawer-example"
                  aria-controls="drawer-example"
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
              </div>
            </div> */}
          </div>
        ))}

        <div
          className={`w-5/6 font-family bottom-0 right-0  text-white fixed h-5/6 z-40 px-2 ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full "
          }`}
        >
          <div
            class=""
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="z-50 overflow-hidden">
              <div class=" inset-0 overflow-hidden">
                <div class="fixed pointer-events-none  fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <div class=" pointer-events-auto  w-screen max-w-md">
                    <div class="flex  flex-col overflow-y-scroll h-full bg-white shadow-xl">
                      <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div class="flex items-start justify-between">
                          <h2
                            class="text-lg font-medium text-gray-900"
                            id="slide-over-title"
                          >
                            Shopping cart
                          </h2>
                          <div class="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => {
                                setShowSidebar(false);
                              }}
                            >
                              <span class="sr-only">Close panel</span>

                              <svg
                                class="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div class="mt-8">
                          <div class="flow-root">
                            <ul
                              role="list"
                              class="-my-6 divide-y divide-gray-200"
                            >
                              {cart.map((c) => (
                                <CartItems c={c}></CartItems>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>.00 /-</p>
                        </div>
                        <p class="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div class="mt-6">
                          <a
                            href="#"
                            class="flex items-center justify-center rounded-md border border-transparent  px-6 py-3 text-base font-medium text-white shadow-sm bg-green-800 hover:bg-green-600"
                          >
                            {" "}
                            <Link to="/dashboard/cart">Checkout</Link>
                          </a>
                        </div>
                        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              class="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              <Link to="/Allproducts"> Continue Shopping</Link>
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
