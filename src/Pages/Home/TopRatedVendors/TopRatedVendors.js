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
            name: 'Sara Parker',
            image: 'https://i.ibb.co/NVz6NM2/vince-veras-AJIq-ZDAUD7-A-unsplash.jpg',
            orders: 86,
            rating: 4,
        },
        {
            id: 3,
            name: 'Mark Rover',
            image: 'https://i.ibb.co/cFx2Jp3/podpros-GEn-Cn-Yh-A1-J4-unsplash.jpg',
            orders: 78,
            rating: 4,
        },
        {
            id: 4,
            name: 'Robert Hastings',
            image: 'https://i.ibb.co/d0B5jHq/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg',
            orders: 65,
            rating: 4,
        }
    ]
    
    return (
        <div className='font-family'>
            <h1 className='lg:pt-16 pb-4 text-center font-bold text-slate-800 text-5xl'>Choose your favorite from our top vendors</h1>
            <div className='bg-lime-300 lg:p-36 grid gap-4 lg:grid-cols-2 p-4'>
                {
                    vendors.map(vendor => <VendorCard
                        key={vendor.id}
                        vendor={vendor}
                    ></VendorCard>)
                }
            </div>
        </div>
    );
};

export default TopRatedVendors;