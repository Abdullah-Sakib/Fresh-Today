/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import p1 from "../../../images/p(2).jpg";
import p2 from "../../../images/p(3).jpg";
import p3 from "../../../images/p(5).jpg";
import p4 from "../../../images/p(6).jpg";
import p5 from "../../../images/p(7).jpg";
import p6 from "../../../images/p(8).jpg";
import p7 from "../../../images/p(1).jpg";
import p8 from "../../../images/p(10).jpg";
import p9 from "../../../images/p(4).jpg";
import p10 from "../../../images/p(9).jpg";
import p11 from "../../../images/p (1).jpg";
import p12 from "../../../images/p (2).jpg";

// This part is contributed by Tasfi

const Products = () => {
  const products = [
    { image: p1, name: "Cauliflower" },
    { image: p2, name: "Papaya" },
    { image: p3, name: "Carrot" },
    { image: p4, name: "Almond" },
    { image: p5, name: "Apple" },
    { image: p6, name: "Almonds" },
    { image: p7, name: "Pumpkins" },
    { image: p8, name: "White-Rice" },
    { image: p9, name: "Tomato" },
    { image: p10, name: "Strawbarries" },
    { image: p11, name: "Potato" },
    { image: p12, name: "Capsicum" },
  ];

  return (
    <>
      <div className="mt-48 text-left lg:mx-44 sm:mx-5 md:mx-0 text-4xl font-family ">
        <h3>Popular items</h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
          {products.map((p) => (
            //  <div className="card card-compact w-80 bg-base-100 shadow-xl mt-10 ">
            //      <figure><img src={p.image} alt="Shoes" className='h-80 w-full ' /></figure>
            //      <div className="card-body">
            //        <h2 className="card-title">{p.name}</h2>
            //        <p>Price: 20 $</p>
            //        <div className="card-actions justify-end">
            //          <button className="btn btn-primary">Buy Now</button>
            //        </div>
            //      </div>
            //    </div>

            <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-9">
              {/* <a href="#"> */}
              <img
                class="p-8 rounded-t-lg"
                src={p.image}
                className="h-80 w-full "
                alt="product image"
              />
              {/* </a> */}
              <div class="px-5 pb-5">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {p.name}
                </h5>

                <div class="flex items-center mt-2.5 mb-5">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    5.0
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>

                  <a
                    href="#"
                    class="text-white bg-lime-700 hover:bg-lime-900 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-3 mx-3 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
