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
import p9 from "../../../images/tomato.webp";
import p10 from "../../../images/p(9).jpg";
import p11 from "../../../images/p (1).jpg";
import p12 from "../../../images/cap.webp";
import { Link } from "react-router-dom";

// This part is contributed by Tasfi

const Products = () => {
  const products = [
    { id: 1, image: p1, name: "Cauliflower" },
    { id: 2, image: p2, name: "Papaya" },
    { id: 3, image: p3, name: "Carrot" },
    { id: 4, image: p4, name: "Almond" },
    { id: 5, image: p5, name: "Apple" },
    { id: 6, image: p6, name: "Almonds" },
    { id: 7, image: p7, name: "Pumpkins" },
    { id: 8, image: p8, name: "White-Rice" },
    { id: 9, image: p9, name: "Tomato" },
    { id: 10, image: p10, name: "Strawbarries" },
    { id: 11, image: p11, name: "Potato" },
    { id: 12, image: p12, name: "Capsicum" },
  ];

  return (
    <>
      <div className="mt-16 md:mt-28 lg:mt-32 text-left lg:mx-20 mx-5 md:mx-0 text-4xl font-family ">
        <h3 className="mb-5 md:mb-0">Popular items</h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
          {products.map((p) => (
<<<<<<< HEAD
<<<<<<< HEAD

            <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-9">
=======
            <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 md:my-5">
>>>>>>> c1773193051348538507467f6581cce290c800b7
              {/* <a href="#"> */}
              <img
                class="p-8 rounded-t-lg"
                src={p.image}
                className="h-72 lg:h-60 2xl:h-80 w-full rounded-t "
                alt="product image"
              />
              {/* </a> */}
              <div class="px-5 pb-5 pt-4">
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
                  <Link
                    to={`product/${p.id}`}

                    class="text-white bg-lime-700 hover:bg-lime-900 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-3 mx-3 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
                  >
                    Buy Now
                  </Link>
=======
            <Link to={`/product/${p.id}`} aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl w-full max-w-sm  md:my-9">
                <img
                  className="h-96 w-96 lg:h-72 lg:w-80 xl:h-80 xl:w-96 rounded-lg"
                  src={p.image}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-3xl font-bold text-gray-100">
                    {p.name}
                  </p>
>>>>>>> 954865f0a698dc2bf79e32f3a88e156de6ac1730
                </div>
              </div>
            </Link>
          ))}
        </div>
<<<<<<< HEAD
        <Link
<<<<<<< HEAD
          to='/AllProducts'
          class="mt-32 mx-auto text-dark font-semibold bg-lime-200 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300 rounded-lg text-xl px-3 mx-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
=======
          to="/AllProducts"
          class="inline-block mt-5 md:mt-0 text-dark font-semibold bg-lime-200 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300 rounded-lg text-xl px-3  py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
>>>>>>> c1773193051348538507467f6581cce290c800b7
        >
          See More...
        </Link>
=======
        <div className="text-center">
          <Link
            to="/AllProducts"
            aria-label=""
            className="inline-flex items-center font-semibold text-xl transition-colors duration-200 text-deep-purple-accent-400 hover:text-bg-lime-800"
          >
            See more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
>>>>>>> 954865f0a698dc2bf79e32f3a88e156de6ac1730
      </div>
    </>
  );
};

export default Products;

// {/* <div className="mt-48 text-left lg:mx-20 sm:mx-5 md:mx-0 text-4xl font-family ">
// <h3>Popular items</h3>
// <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
//   {products.map((p) => (

//     <div class="w-full max-w-sm  shadow-md my-9">
//       {/* <a href="#"> */}
//       <img
//         // class="p-8 rounded-t-lg hover:bg-lime-700"
// //         src={p.image}
// //         className="h-80 w-full rounded-lg hover:bg-lime-700  "
// //         alt="product image"
// //       />
// //       {/* </a> */}
// //       {/* <div class="px-5 pb-5">
// //         <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
// //           {p.name}
// //         </h5>
// //       </div> */}
// //     </div>
// //   ))}
// // </div>
// // <Link
