import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <h3>Home</h3>
            <CustomerReview></CustomerReview>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;