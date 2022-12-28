import React from 'react';
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { useLoaderData } from 'react-router-dom';

// This part is contributed by Ankan

const ProductInfo = () => {
    const products = useLoaderData();
    
    return (
        <div className='w-11/12 mx-auto'>
            <div className="card w-full my-10 bg-base-100 shadow-xl">
                <figure>
                    <img style={{ width: '100%', height: '400px' }} src={products[0]?.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="text-2xl font-bold w-1/2">{products[0]?.productName}</h2>
                        <p className='w-1/2 text-lg text-right'>See Reviews</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10'>
                {
                    products?.map(product => <div key={product._id} className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${product?.image})` }} ></div>

                        <div className="w-2/3 p-4 md:p-4">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{product.category}</h1>

                            <h1 className="text-md font-bold text-gray-700 dark:text-gray-200 md:text-md">from {product.price} <span className='text-sm'>Tk</span></h1>
                            <h1 className="text-sm font-bold text-gray-500 dark:text-gray-200 md:text-sm">Available {product.quantity} kg</h1>
                            <div className="flex justify-between mt-10 item-center">
                                <div className='flex justify-between items-center'>
                                    <BsPlusSquare></BsPlusSquare>
                                    <span className="text-lg mx-4 font-bold text-gray-700 dark:text-gray-200 md:text-xl"> 0 </span>
                                    <AiOutlineMinusSquare className='text-xl'></AiOutlineMinusSquare>
                                </div>
                                <button className="px-2 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-green-500 rounded">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default ProductInfo;