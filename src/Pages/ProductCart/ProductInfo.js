import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Chat from "../Chat/Chat";
import CartItems from "./CartItems";

// This part is contributed by Ankan Halder

const ProductInfo = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [counter, setCounter] = useState(1);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const selectedProduct = {
      productId : product._id,
      productName: product.productName,
      price: product.price,
      category: product.category,
      quantity: counter,
    };

    const itemsInCart = localStorage.getItem("cart");
    if (itemsInCart) {
      const parsedItems = JSON.parse(itemsInCart);
      const newCart = [...parsedItems, selectedProduct];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return;
    }
    else {
      const newCart = [selectedProduct];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return;
    }
  }, [product, counter]);


  
  const handleQuantity = (e) => {
    if (e === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  const handleCart = (product) => {

    const found = cart.find((item) => item.productId === product._id);
    console.log(found, cart);

    if (found) {
      console.log("Already in cart");
      return;
    }

    setProduct(product);
  };

  return (
    <div className=" font-family">
      <section className="relative bg-[url(https://ramarama.my/wp-content/uploads/2020/11/fresh-food-groceries-tray-box-wood-tabletop-banner-background-scaled.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Explore the best items
              <strong className="block font-extrabold text-green-700">
                From here
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center"></div>
          </div>
        </div>
      </section>

      <h1 className="text-center mt-16 text-5xl">{products[0].productName}</h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mt-0 mb-32">
        {products?.map((product) => (
          <div
            key={product._id}
            className="flex max-w-md overflow-hidden  rounded-lg  dark:bg-gray-800"
          >
            <div className="mt-5 flex items-center">
              <div className="container bg-gray-100 mx-auto p-6 max-w-sm rounded-2xl overflow-hidden shadow hover:shadow-2xl transition duration-300">
                <img className="rounded-xl" src={product.image} alt="" />
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="mt-5 text-2xl font-semibold">
                      {product.vendorName}
                    </h1>
                    <p className="mt-2">price: {product.price}/-</p>
                    <p className="mt-2">Available {product.quantity} kg</p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        handleCart(product);
                        setShowSidebar(true);
                      }}
                      className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "
                    >
                      Add to cart
                    </button>
                    {/* <Chat></Chat> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div
          className={`w-5/6 font-family bottom-0 right-0  pointer-events-none text-white fixed h-5/6 z-40 px-2 ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full "
          }`}
        >
          <div className="" aria-labelledby="slide-over-title" role="dialog">
            <div className="z-50 overflow-hidden">
              <div className=" inset-0 overflow-hidden">
                <div className="fixed pointer-events-none inset-y-0 right-0 flex max-w-full pl-10 ">
                  <div className=" pointer-events-auto  w-screen max-w-md">
                    <div
                      className="flex  flex-col overflow-y-scroll h-full bg-white shadow-xl"
                      id="addToCartSideBar"
                    >
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <h2
                            className="text-lg font-medium text-gray-900"
                            id="slide-over-title"
                          >
                            Shopping cart
                          </h2>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => {
                                setShowSidebar(false);
                              }}
                            >
                              <span className="sr-only">Close panel</span>

                              <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200">
                              {cart.map((item) => (
                                <CartItems 
                                  item={item} 
                                  key={item?._id}
                                  handleQuantity={handleQuantity}
                                  counter={counter}
                                  setCounter={setCounter}
                                ></CartItems>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <Link
                            className="flex items-center justify-center rounded-md border border-transparent  px-6 py-3 text-base font-medium text-white shadow-sm bg-green-800 hover:bg-green-600"
                            to="/cart"
                          >
                            Place order
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{" "}
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
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
