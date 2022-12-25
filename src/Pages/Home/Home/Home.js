import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Motto from '../Motto/Motto';
import Products from '../Products/Products';
import Newsletter from '../Newsletter/Newsletter';
import TopRatedVendors from '../TopRatedVendors/TopRatedVendors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Motto></Motto>
            <Products></Products>
            <CustomerReview></CustomerReview>
            <TopRatedVendors></TopRatedVendors>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;  