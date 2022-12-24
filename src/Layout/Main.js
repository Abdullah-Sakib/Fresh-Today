import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../Pages/Shared/Header/Header";

// This part is contributed by Tasfi

const Main = () => {
  

    return (
        <div>
           <Header></Header> 
           <Outlet></Outlet>         
        </div>
    );
};

export default Main;