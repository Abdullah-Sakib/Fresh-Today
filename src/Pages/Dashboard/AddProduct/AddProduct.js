import React, { useEffect, useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";


// 01304392323 - Omar Faruk - omarfaruk@gmail.com
// 01404349533 - Dilowar Hosen - dilowarhosen@gmail.com
// 01502765723 - Rashed Shihab - rashedshihab@gmail.com
// 01707362339 - Shakil Mahmud - shakilmahmud@gmail.com
// 01902545432 - Faizul Osman - faizulosman@gmail.com

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [categories, setCategories] = useState([]);
  const [processing, setProcessing] = useState(false);
  const imageHostingKey = process.env.REACT_APP_imgbb_api_key;

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleAddProduct = (data) => {
    setProcessing(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostingKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        data.image = imgData.data.url;

        const productData = {
          ...data,
          image: data.image,
          productAddtionDate: new Date(),
          vendorName: "Faizul Osman",
          vendorEmail: "faizulosman@gmail.com",
        };


        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productData),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.acknowledged){
              toast.success('Product added successfully.')
            }
            else{
              toast.error('Failed to add product. Please try again.')
            }
          });
        setProcessing(false);
      });
  };

  return (
    <div className="font-family">
      <div className="flex justify-between items-center">
        <h1 className="mb-5 text-3xl font-semibold ">
          Add a <span className="text-green-500">product</span>
        </h1>
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <BsFillArrowRightSquareFill className="text-3xl text-green-500"></BsFillArrowRightSquareFill>
        </label>
      </div>

      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="flex flex-col md:w-2/3 p-5 bg-lime-100 rounded-lg mb-10"
      >
        <label className="label font-semibold">Product category</label>
        <select
          name="category"
          className="select select-bordered block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-lime-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-lime-300 text-base"
          {...register("category", { required: true })}
        >
          <option value="">select product category</option>
          {categories.map((category) => (
            <option key={category?._id} value={category?.name}>
              {category?.name}
            </option>
          ))}
        </select>

        <label className="label font-semibold">Product name</label>
        <input
          type="text"
          placeholder="name"
          name="productName"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-lime-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-lime-300"
          {...register("productName", { required: true })}
        />

        <label className="label font-semibold">Price</label>
        <input
          type="number"
          placeholder="price"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-lime-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-lime-300"
          {...register("price", { required: true })}
        />

        <label className="label font-semibold">Quantity</label>
        <input
          type="text"
          name="quantity"
          placeholder="quantity"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-lime-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-lime-300"
          {...register("quantity", { required: true })}
        />

        <label className="label font-semibold">Phone number</label>
        <input
          type="number"
          name="vendorPhone"
          placeholder="phone number"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-lime-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-lime-300"
          {...register("vendorPhone", { required: true })}
        />

        <label className="label font-semibold">Location</label>
        <input
          type="text"
          name="vendorLocation"
          placeholder="location"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-lime-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-lime-300"
          {...register("vendorLocation", { required: true })}
        />

        <label className="label font-semibold">Image</label>
        <label
          htmlFor="dropzone-file"
          className="flex items-center px-3 py-3 mx-auto  text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900 w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>

          <h2 className="mx-3 text-gray-400">product image</h2>

          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            {...register("image", { required: true })}
          />
        </label>

        <button
          type="submit"
          className="btn bg-green-400 border-0 hover:bg-green-600 mt-10"
          disabled={processing}
        >
          Add product
        </button>
        {processing && <progress className="progress w-full"></progress>}
      </form>
    </div>
  );
};

export default AddProduct;
