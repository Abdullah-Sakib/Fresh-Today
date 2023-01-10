/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// This part is contributed by Tasfi

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fresh-today-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [])

  return (
    <>
      <div className="mt-16 md:mt-28 lg:mt-32 text-left lg:mx-20 mx-5 md:mx-5 text-4xl font-family ">
        <h3 className="mb-5 md:mb-0 md:ml-5 lg:ml-0 font-bold">Popular items</h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
          {products.map((p) => (
            <Link key={p._id} to={`/product/${p?.name}`} aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl w-full max-w-sm  md:my-9">
                <figure className="h-80 w-80 lg:h-64 lg:w-64">
                  <img
                    // className="h-96 w-96 lg:h-72 lg:w-72 xl:h-80 xl:w-96 rounded-lg"
                    className="h-full w-full object-cover  rounded-lg"
                    src={p.image}
                    alt=""
                  />
                </figure>
                <div className="absolute flex justify-center items-center inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-3xl font-bold text-gray-100">
                    {p.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
      </div>
    </>
  );
};

export default Products;

// {/* <div className="mt-48 text-left lg:mx-20 sm:mx-5 md:mx-0 text-4xl font-family ">
// <h3>Popular items</h3>
// <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
//   {products.map((p) => (

//     <div className="w-full max-w-sm  shadow-md my-9">
//       {/* <a href="#"> */}
//       <img
//         // className="p-8 rounded-t-lg hover:bg-lime-700"
// //         src={p.image}
// //         className="h-80 w-full rounded-lg hover:bg-lime-700  "
// //         alt="product image"
// //       />
// //       {/* </a> */}
// //       {/* <div className="px-5 pb-5">
// //         <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
// //           {p.name}
// //         </h5>
// //       </div> */}
// //     </div>
// //   ))}
// // </div>
// // <Link