import React from 'react';

const CartModal = ({ setSelectedProduct, selectedProduct }) => {
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="cartModal" className="modal-toggle" />
            <label htmlFor="cartModal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Product Name: {selectedProduct?.category}</h3>
                    <h3 className="text-lg font-bold">Price: {selectedProduct?.price}</h3>
                    <h3 className="text-lg font-bold">Selected quantity: {selectedProduct?.quantity}</h3>
                    <div className='flex justify-between'>
                        <button className='btn btn-info'>Confirm Order</button>
                        <button onClick={() => setSelectedProduct(null)} className='btn btn-error'>Cancel</button>
                    </div>

                </label>
            </label>
        </div>
    );
};

export default CartModal;