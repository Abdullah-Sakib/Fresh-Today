import React from 'react';
import customerReviewBg from '../../../Assets/customer-review-bg.jpg';

const CustomerReview = () => {
    return (
        <div className='my-36 h-screen' style={{backgroundImage: `url(${customerReviewBg})`}}>
            <div className="carousel h-screen w-full">
                <div id="slide1" className="carousel-item relative w-full h-full border-2 flex justify-center shadow-lg">
                    <div className='grid grid-cols-2'>
                        <div className='flex justify-center items-center'>
                        <div className="avatar">
                            <div className="w-96 rounded-full">
                                <img src="https://i.ibb.co/J5GVP1f/gayatri-malhotra-EJWa-KVPB6i-I-unsplash.jpg" alt="" />
                            </div>
                        </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='text-start bg-gray-500 p-4 opacity-90 shadow-2xl'>
                                <h2 className='text-2xl font-bold text-base-100'>John Doe</h2>
                                <p className='text-base-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex justify-center shadow-lg">
                    <div className='grid grid-cols-2'>
                        <div className='flex justify-center items-center'>
                        <div className="avatar">
                            <div className="w-96 rounded-full">
                                <img src="https://i.ibb.co/J5GVP1f/gayatri-malhotra-EJWa-KVPB6i-I-unsplash.jpg" alt="" />
                            </div>
                        </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='text-start bg-gray-500 p-4 opacity-90 shadow-2xl'>
                                <h2 className='text-2xl font-bold text-base-100'>John Doe</h2>
                                <p className='text-base-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full flex justify-center shadow-lg">
                <div className='grid grid-cols-2'>
                        <div className='flex justify-center items-center'>
                        <div className="avatar">
                            <div className="w-96 rounded-full">
                                <img src="https://i.ibb.co/J5GVP1f/gayatri-malhotra-EJWa-KVPB6i-I-unsplash.jpg" alt="" />
                            </div>
                        </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='text-start bg-gray-500 p-4 opacity-90 shadow-2xl'>
                                <h2 className='text-2xl font-bold text-base-100'>John Doe</h2>
                                <p className='text-base-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;