import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

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
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold ">
          All <span className="text-green-500">Users</span>
        </h1>
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <BsFillArrowRightSquareFill className="text-3xl text-green-500"></BsFillArrowRightSquareFill>
        </label>
      </div>

      {/* filter start  */}
      <div className=' text-gray-700 text-xl m-5'>
        <h1 className='text-xl'>Filter Your User</h1>
        <div className='w-full'>
          <form action="" className="bg-green-50 space-y-6 ng-untouched ng-pristine ng-valid flex flex-row">
            <div className="flex justify-evenly w-full space-y-1 text-sm border-solid border-2 border-green-500 rounded p-5">
              <div>
                <select name="categoryName" className="select border-solid border-2 border-green-500">
                  <option value="Buyer" defaultValue>Buyer</option>
                  <option value="Seller" >Seller</option>
                  <option value="Admin" >Admin</option>
                </select>
              </div>
              <div className=" form-control ">
                <input className="btn btn-success" type="submit" value="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* filter end  */}

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg border-2 border-green-500 rounded ">
        <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="bg-green-50 text-xl text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th>

              </th>
              <th className="p-3">Name</th>
              <th>Role</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user, id) => <tr key={id} className='border-b border-green-200 dark:border-green-700'>
                <th scope="row" className="py-4 px-6 font-medium text-black-900 whitespace-nowrap bg-green-100 dark:text-white dark:bg-gray-800">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td className="py-4 px-6">
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
                <td className="py-4 px-6 bg-green-100 dark:bg-gray-800">

                  {user.role}
                </td>
                <td className="py-4 px-6">Active</td>
                <th className="py-4 px-6 bg-green-100 dark:bg-gray-800">
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
