import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashMain = () => {
    return (
        <div className='bg-white text-black'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col">

                <div className="drawer-content flex flex-col p-5">

                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                </div>
                <div className="drawer-side border-solid border-2 border-green-500 rounded ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='border-solid border-2 border-green-500 rounded-xl m-2'><Link to='/dashboard/users'>Users</Link></li>
                        <li className='border-solid border-2 border-green-500 rounded-xl m-2'><Link to='/dashboard/products'>Products</Link></li>
                        <li className='border-solid border-2 border-green-500 rounded-xl m-2'><Link to='/dashboard/cart'>Cart</Link></li>
                        <li className='border-solid border-2 border-green-500 rounded-xl m-2'><Link to='/dashboard/reports'>Reports</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default DashMain;