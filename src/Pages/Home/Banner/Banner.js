import React from 'react';
import logo from '../../../images/BANNER.png'
import './Banner.css';

// This part is contributed by Tasfi

const Banner = () => {
    return (
        <div className='relative font-family'>
            <img className='w-max' src={logo} alt=''/>
            <h1 class="absolute  lg:text-3xl md:text-xl  text-dark lg:top-1/3 md:top-1/3 top-20 left-1/2  -translate-x-1/2 -translate-y-1/2">
            Your satisfaction is our priority!</h1>
        </div>

    //     <div class="relative w-40 h-40">
    //     <img src={logo} alt="Avatar" class="rounded-full w-full h-full" />
    //     <div class="absolute w-full h-full top-0 left-0 rounded-full bg-blue-400 text-white text-xs flex justify-center items-center opacity-0 hover:opacity-10"></div>
    //   </div>


        
    );
};

export default Banner;