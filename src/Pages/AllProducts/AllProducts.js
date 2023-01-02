import React, { useEffect, useState } from "react";
import logo from "../../images/cate1.png";
import fruit from "../../images/fruit.png";
import veg from "../../images/veg.png";
import dairy from "../../images/dairy.png";
import meat from "../../images/meat.png";
import fish from "../../images/fish.png";
import bread from "../../images/bread.png";
import juice from "../../images/juice.png";
import rice from "../../images/Rice.png";
import { Link } from "react-router-dom";


const CategoriesImages = [
  { id: 1, image: fruit, name: 'Fruits' },
  { id: 2, image: veg, name: 'Vegetables' },
  { id: 3, image: bread, name: 'Dry-Food' },
  { id: 4, image: meat, name: 'Meat' },
  { id: 5, image: dairy, name: 'Fruits' },
  { id: 6, image: fish, name: 'Fruits' },
  { id: 7, image: juice, name: 'Fruits' },
  { id: 8, image: rice, name: 'Fruits' },
]

const AllProducts = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryVegetables, setCategoryVegetables] = useState([]);
  const [categoryDryFood, setCategoryDryFood] = useState([]);
  const [categoryMeat, setCategoryMeat] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/category/Fruits`)
      .then(res => res.json())
      .then(data => {
        setCategoryProducts(data)
      })
  }, [])
  useEffect(() => {
    fetch(`http://localhost:5000/products/category/Vegetables`)
      .then(res => res.json())
      .then(data => {
        setCategoryVegetables(data)
      })
  }, [])
  useEffect(() => {
    fetch(`http://localhost:5000/products/category/Dry-Food`)
      .then(res => res.json())
      .then(data => {
        setCategoryDryFood(data)
      })
  }, [])
  useEffect(() => {
    fetch(`http://localhost:5000/products/category/Meat`)
      .then(res => res.json())
      .then(data => {
        setCategoryMeat(data)
      })
  }, [])

  return (
    <div className="grid grid-cols-1 AllProducts">
      <div className="mx-auto my-5 ">
        <div className="container mx-auto py-9 md:py-12 ">
          <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            <div className="flex flex-col md:flex-row items-strech justify-between shadow bg-lime-50 rounded py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
              <div className="flex flex-col justify-center md:w-1/2">
                <h1 className="text-3xl lg:text-4xl  text-gray-800 font-family">
                  <b>The Best Products</b> in Every Category
                </h1>
                <p className="text-base lg:text-xl text-gray-800 mt-4 font-family">
                  Save upto <span className="font-bold mt-3">50%</span>
                </p>
              </div>
              <div className="md:w-1/2 mx-auto">
                <img src={logo} className="rounded w-200" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3
          // className="text-3xl font-bold my-9 font-family mx-5"
          className="my-8 md:mt-28 lg:mt-32 text-left lg:mx-20 mx-5 md:mx-5 text-4xl font-family "
        >
          All Categories
        </h3>
      </div>

      <div className="grid lg:grid-cols-8 lg:mx-auto md:grid-cols-4 sm:grid-cols-2  space-y-4 lg:space-y-0">
        {
          CategoriesImages.map(product => <div key={product.id} className=" w-44 h-44 lg:w-36 lg:h-36 hover:bg-lime-100 cursor-pointer bg-lime-200 shadow text-dark rounded-full md:mx-2 flex justify-center items-center mx-auto">
            <a href={`#${product.name}`}>
              <img src={product.image} className="rounded-full w-28 h-28" alt=""></img>
            </a>
          </div>
          )
        }

       
      </div>

      <div className="mt-16 md:mt-28 lg:mt-32 text-left lg:mx-20 mx-5 md:mx-5 text-4xl font-family ">
        <div id="Fruits">
          <h3 className="mb-5 md:mb-0 md:ml-5 lg:ml-0 font-bold">Fruits</h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
          {categoryProducts.slice(0, 8).map((p) => (
            <Link key={p._id} to={`/product/${p?.productName}`} aria-label="View Item">
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
                    {p.productName}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6 md:mt-12 lg:mt-14 text-left lg:mx-20 mx-5 md:mx-5 text-4xl font-family ">
        <div id="Vegetables">
          <h3 className="mb-5 md:mb-0 md:ml-5 lg:ml-0 font-bold">Vegetables</h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
          {categoryVegetables.slice(0, 8).map((p) => (
            <Link key={p._id} to={`/product/${p?.productName}`} aria-label="View Item">
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
                    {p.productName}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6 md:mt-12 lg:mt-14 text-left lg:mx-20 mx-5 md:mx-5 text-4xl font-family ">
        <div id="Dry-Food">
          <h3 className="mb-5 md:mb-0 md:ml-5 lg:ml-0 font-bold">Dry-Food</h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
          {categoryDryFood.slice(0, 8).map((p) => (
            <Link key={p._id} to={`/product/${p?.productName}`} aria-label="View Item">
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
                    {p.productName}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6 md:mt-12 lg:mt-14 text-left lg:mx-20 mx-5 md:mx-5 text-4xl font-family ">
        <div id='Meat'>
          <h3 className="mb-5 md:mb-0 md:ml-5 lg:ml-0 font-bold">Meat</h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
          {categoryMeat.slice(0, 8).map((p) => (
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
                    {p.productName}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
