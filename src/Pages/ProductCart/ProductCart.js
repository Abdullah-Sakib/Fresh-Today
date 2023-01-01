import React from 'react';
import ProductInfo from './ProductInfo';
import { CartProvider } from 'react-use-cart';


const ProductCart = () => {
    return (
        <div>
            <CartProvider>
                <ProductInfo></ProductInfo>
                
            </CartProvider>
            
        </div>
    );
};

export default ProductCart;