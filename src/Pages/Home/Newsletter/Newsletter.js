import React, { useState } from 'react';

const Newsletter = () => {
    const [disabled, setDisabled] = useState(true);

    const handleInput = (e) => {
        if (e.target.value === '') {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    };

    return (
        <div className='bg-gradient-to-r from-lime-200 via-green-100 to-lime-200 py-20 my-36 grid justify-center font-family shadow'>
            <h2 className='text-3xl font-bold text-center mb-8'>SUBSCRIBE TO OUR NEWSLETTER!</h2>
            <p className='pl-14 mb-6 font-bold'>
                Get notified about our latest products and offers
            </p>
            <form className='pl-8'> 
                <input type="email" onChange={handleInput} name="user-email" placeholder="Put your email here" className="input w-full max-w-xs mr-2 rounded-none" />
                <input type="submit" className="btn bg-blue-900 rounded-none text-base-100 border-0" value="Submit" disabled={disabled} />
            </form>
        </div>
    );
};

export default Newsletter;