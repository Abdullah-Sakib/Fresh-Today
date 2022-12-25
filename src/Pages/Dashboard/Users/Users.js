import React from 'react';

const Users = () => {
    const users = [
        {
            name: 'john doe',
            address: 'Dhaka, Bangladesh',
            role: 'buyer'
        },
        {
            name: 'john doe',
            address: 'Dhaka, Bangladesh',
            role: 'buyer'
        },
        {
            name: 'john doe',
            address: 'Dhaka, Bangladesh',
            role: 'buyer'
        },
        {
            name: 'john doe',
            address: 'Dhaka, Bangladesh',
            role: 'buyer'
        },
        {
            name: 'john doe',
            address: 'Dhaka, Bangladesh',
            role: 'buyer'
        },
        {
            name: 'john doe',
            address: 'Dhaka, Bangladesh',
            role: 'buyer'
        }
    ]
    return (
        <div className='w-full'>
            <div className=' text-gray-700 text-xl m-5'>
                <h1 className='text-xl'>Filteration Your User</h1>
                <div className='w-full'>
                    <form action="" className="space-y-6 ng-untouched ng-pristine ng-valid flex flex-row">
                        <div className="space-y-1 text-sm border-solid border-2 border-green-500 rounded p-5">
                            <label className="block text-xl dark:text-gray-400">Select Product Category</label>
                            <select name="categoryName" className="select w-full max-w-xs border-solid border-2 border-green-500">
                                <option value="Buyer" defaultValue>Buyer</option>
                                <option value="Seller" >Seller</option>
                                <option value="Admin" >Admin</option>
                            </select>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg border-solid border-2 border-green-500 p-2">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th>

                            </th>
                            <th className='text-xl'>Name</th>
                            <th className='text-xl'>Role</th>
                            <th className='text-xl'>Favorite Color</th>
                            <th className='text-xl'></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, id) => <tr key={id} className='border-b border-green-200 dark:border-green-700'>
                                <th scope="row" className="py-4 px-6 font-medium text-black-900 whitespace-nowrap bg-green-50 dark:text-white dark:bg-green-800">
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td className="py-4 px-6  border-solid border-2 border-green-500 rounded">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6 bg-green-50 dark:bg-gray-800">
                                    {user.role}

                                </td>
                                <td className="py-4 px-6">Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs border border-black">details</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;