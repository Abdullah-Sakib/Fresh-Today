import React from 'react';
import payment from '../../images/payment.svg';

const Payment = () => {
    const handleOrderSummeryForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const postcode = form.postcode.value;
        const orderSummery = { name, email, price, phone, address, postcode }
        console.log(orderSummery)

        fetch('http://localhost:5000/payment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderSummery)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.url)
                console.log(data)
            })
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className="hero">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <div className="mt-5 text-center lg:text-left">
                        <img style={{ width: '90%' }} src={payment} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Order Summary</h2>
                            <form onSubmit={handleOrderSummeryForm}>
                                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Name</label>
                                        <input id="username" type="text" name='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                                        <input id="emailAddress" name='email' type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="price">Price</label>
                                        <input id="price" type="price" name='price' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="phone">Phone</label>
                                        <input id="phone" type="number" name='phone' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="address">Address</label>
                                        <input id="address" type="text" name='address' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="postcode">Postcode</label>
                                        <input id="postcode" type="number" name='postcode' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                </div>

                                <div className="mt-6">
                                    <button type='submit' className="px-8 py-2.5 w-full leading-5 text-black font-semibold transition-colors duration-300 transform bg-green-500 rounded-md focus:outline-none ">Check Out</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;