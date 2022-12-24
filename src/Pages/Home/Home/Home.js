import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Products from '../Products/Products';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <CustomerReview></CustomerReview>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;  