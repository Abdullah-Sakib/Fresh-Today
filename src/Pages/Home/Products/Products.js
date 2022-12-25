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
import { Link } from "react-router-dom";

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
    
    <div className="mt-48 text-left lg:mx-20 sm:mx-5 md:mx-0 text-4xl font-family ">
    <h3>Popular items</h3>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
    {
    products.map(p => 
      <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl w-full max-w-sm  shadow-md my-9">
            <img
              className="h-96 w-96 rounded-lg"
              src={p.image}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
              {p.name}
              </p>
              
            </div>
          </div>
        </a>
      
      
      
      )
     }
   
    </div>
    <div className="text-center">
        <Link
          to ="/AllProducts"
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
           