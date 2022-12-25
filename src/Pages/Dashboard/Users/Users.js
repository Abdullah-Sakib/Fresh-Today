import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Users = () => {
  const users = [
    {
      name: "john doe",
      address: "Dhaka, Bangladesh",
      role: "buyer",
    },
    {
      name: "john doe",
      address: "Dhaka, Bangladesh",
      role: "buyer",
    },
    {
      name: "john doe",
      address: "Dhaka, Bangladesh",
      role: "buyer",
    },
    {
      name: "john doe",
      address: "Dhaka, Bangladesh",
      role: "buyer",
    },
    {
      name: "john doe",
      address: "Dhaka, Bangladesh",
      role: "buyer",
    },
    {
      name: "john doe",
      address: "Dhaka, Bangladesh",
      role: "buyer",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold ">
          All <span className="text-green-500">Users</span>
        </h1>
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <BsFillArrowRightSquareFill className="text-3xl text-green-500"></BsFillArrowRightSquareFill>
        </label>
      </div>
      <div className="w-full mt-5">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox " />
                  </label>
                </th>
                <th>Name</th>
                <th>Role</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, id) => (
                <tr
                  key={id}
                  className="border-b border-green-200 dark:border-green-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-black-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.address}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-6">Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs border border-black">
                      details
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
