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
        <div className='bg-primary py-20 grid justify-center'>
            <h2 className='text-3xl font-bold text-center mb-8 text-dark'>SUBSCRIBE TO OUR NEWSLETTER!</h2>
            <p className='text-base-100 pl-14 mb-6 font-bold'>
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