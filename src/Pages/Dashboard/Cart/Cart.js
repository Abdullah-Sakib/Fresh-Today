import React from 'react';

const Cart = () => {
    const cart = [
        {
            name: 'carrot',
            Quality: 'flesh',
            category: 'vegetable',
            price: '15',
            isPaid: true
        },
        {
            name: 'carrot',
            Quality: 'flesh',
            category: 'vegetable',
            price: '15',
            isPaid: true
        },
        {
            name: 'carrot',
            Quality: 'flesh',
            category: 'vegetable',
            price: '15',
            isPaid: true
        },
        {
            name: 'carrot',
            Quality: 'flesh',
            category: 'vegetable',
            price: '15',
            isPaid: true
        },
        {
            name: 'carrot',
            Quality: 'flesh',
            category: 'vegetable',
            price: '15',
            isPaid: true
        },
        {
            name: 'carrot',
            Quality: 'flesh',
            category: 'vegetable',
            price: '15',
            isPaid: true
        },
        {
            name: 'carrot',
            Quality: 'flesh',
            category: 'vegetable',
            price: '15',
            isPaid: true
        }
    ]
    return (
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Quality
                            </th>
                            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Payment status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((product, id)=><tr key={id} className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {product.name}
                            </th>
                            <td className="py-4 px-6">
                                {product.Quality}
                            </td>
                            <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                                {product.category}
                            </td>
                            <td className="py-4 px-6">
                                ${product.price}
                            </td>
                            <button  className="py-4 px-6 btn btn-primary">{product.isPaid? 'Paid' : 'Pay Now'}</button>
                        </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;