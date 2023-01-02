import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Motto from '../Motto/Motto';
import Products from '../Products/Products';
import Newsletter from '../Newsletter/Newsletter';
import TopRatedVendors from '../TopRatedVendors/TopRatedVendors';
import Highlight from '../Highlight/Highlight';
import Process from '../Process/Process';
import FAQ1 from '../Faq/FAQ1';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Motto></Motto>
            <Products></Products>
            <CustomerReview></CustomerReview>
            <Process></Process>
            <TopRatedVendors></TopRatedVendors>
            <FAQ1></FAQ1>
            <Highlight></Highlight>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;  