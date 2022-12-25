import React from 'react';
import VendorCard from './VendorCard';

const TopRatedVendors = () => {
    
    const vendors = [
        {
            id: 1,
            name: 'John Doe',
            image: 'https://i.ibb.co/J5GVP1f/gayatri-malhotra-EJWa-KVPB6i-I-unsplash.jpg',
            orders: 100,
            rating: 5,            
        },
        {
            id: 2,
            name: 'Sara Doe',
            image: 'https://i.ibb.co/J5GVP1f/gayatri-malhotra-EJWa-KVPB6i-I-unsplash.jpg',
            orders: 86,
            rating: 4,
        },
        {
            id: 3,
            name: 'Mark Doe',
            image: 'https://i.ibb.co/J5GVP1f/gayatri-malhotra-EJWa-KVPB6i-I-unsplash.jpg',
            orders: 78,
            rating: 4,
        }
    ]
    
    return (
        <div className='grid gap-4 border-4 lg:mx-36 lg:py-20 border-lime-300'>
            <h1 className='text-4xl text-center my-4 font-bold'>Top Rated Vendors</h1>
            {
                vendors.map(vendor => <VendorCard
                    key={vendor.id}
                    vendor={vendor}
                ></VendorCard>)
            }
        </div>
    );
};

export default TopRatedVendors;