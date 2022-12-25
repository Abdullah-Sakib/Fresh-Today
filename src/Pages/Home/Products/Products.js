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
          {products.map((p) => (
           
            <div class="w-full max-w-sm  shadow-md my-9">
              {/* <a href="#"> */}
              <img
                // class="p-8 rounded-t-lg hover:bg-lime-700"
                src={p.image}
                className="h-80 w-full rounded-lg hover:bg-lime-700  "
                alt="product image"
              />
              {/* </a> */}
              {/* <div class="px-5 pb-5">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {p.name}
                </h5>
              </div> */}
            </div>
          ))}
        </div>
        <Link
                    to='/AllProducts'
                    class="mt-32 mx-auto text-dark font-semibold bg-lime-200 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300 rounded-lg text-xl px-3 mx-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
                  >
                    See More...
        </Link>
      </div>
    </>
  );
};

export default Products;
