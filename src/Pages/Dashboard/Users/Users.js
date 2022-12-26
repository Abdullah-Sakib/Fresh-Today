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
    <div className='w-full font-family'>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold ">
          All <span className="text-green-400">Users</span>
        </h1>
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <BsFillArrowRightSquareFill className="text-3xl text-green-500"></BsFillArrowRightSquareFill>
        </label>
      </div>

      {/* filter start  */}
      <div className=' text-gray-700 text-xl my-2'>
        <h1 className='text-xl'>Filter Your User</h1>
        <div className='w-96'>
          <form action="" className="my-2 bg-gradient-to-r from-green-200  via-green-50 to-green-200  space-y-6 ng-untouched ng-pristine rounded-lg ng-valid flex flex-row">
            <div className="flex justify-evenly w-full space-y-1 text-sm   p-5">
              <div>
                <select name="categoryName" className="select border-solid border-2 border-green-500 shadow ">
                  <option value="Buyer" defaultValue>Buyer</option>
                  <option value="Seller" >Seller</option>
                  <option value="Admin" >Admin</option>
                </select>
              </div>
            
            </div>
          </form>
        </div>
      </div>
      {/* filter end  */}

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg border rounded ">
      <table className="table  w-full">
          
          <thead className=" rounded ">
            <tr className="bg-green-100 text-center">
              <th className="bg-green-200 text-lg ">Name</th>
              <th className="bg-green-200 text-lg ">Role</th>
              <th className="bg-green-200 text-lg ">Status</th>
              <th className="bg-green-200 text-lg "></th>
             
              
            </tr>
          </thead>
          <tbody>

            {
              users.map((user, id) => <tr key={id} className='border '>
               
                <td className="py-4 px-6 border ">
                  <div className="flex justify-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6  text-center border">

                  {user.role}
                </td>
                <td className="py-4 px-6 text-center border">Active</td>
                <td className="py-4 px-6 text-center border"><button className="bg-gradient-to-r from-lime-200  via-green-100 to-lime-200 rounded-lg px-4 py-2 text-dark">
                  Details
                </button></td>
                
                {/* <td className="py-4 px-6 text-center border">  <button className="bg-gradient-to-r from-lime-200  via-green-100 to-lime-200 rounded-lg px-4 py-2 text-dark">
                  Details
                </button></td> */}
                
              </tr>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Users;
