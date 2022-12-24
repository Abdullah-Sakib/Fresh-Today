import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashMain = () => {
    return (
        <div className='bg-white text-black'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard/users'>Users</Link></li>
                        <li><Link to='/dashboard/products'>Products</Link></li>
                        <li><Link to='/dashboard/cart'>Cart</Link></li>
                        <li><Link to='/dashboard/reports'>Reports</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashMain;