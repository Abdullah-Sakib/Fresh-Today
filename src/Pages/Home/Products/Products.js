import React from 'react';
import p1 from '../../../images/p(2).jpg'
import p2 from '../../../images/p(3).jpg'
import p3 from '../../../images/p(5).jpg'
import p4 from '../../../images/p(6).jpg'
import p5 from '../../../images/p(7).jpg'
import p6 from '../../../images/p(8).jpg'
import p7 from '../../../images/p(1).jpg'
import p8 from '../../../images/p(10).jpg'
import p9 from '../../../images/p(4).jpg'
import p10 from '../../../images/p(9).jpg'
import p11 from '../../../images/p (1).jpg'
import p12 from '../../../images/p (2).jpg'


// This part is contributed by Tasfi

const Products = () => {
    const products =[{image:p1,name:'Cauliflower'},
    {image:p2,name:'Papaya'},
    {image:p3,name:'Carrot'},
    {image:p4,name:'Almond'},
    {image:p5,name:'Apple'},
    {image:p6,name:'Almonds'},
    {image:p7,name:'Pumpkins'},
    {image:p8,name:'White-Rice'},
    {image:p9,name:'Tomato'},
    {image:p10,name:'Strawbarries'},
    {image:p11,name:'Potato'},
    {image:p12,name:'Capsicum'}]
    
    return (
        <>
        <div className='mt-44 text-left lg:mx-44 sm:mx-5 md:mx-0 text-4xl font-family '>
            <h3>Popular items</h3>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 justify-items-center'>
            {
            
            products.map(p => 
                
           <div className="card card-compact w-80 bg-base-100 shadow-xl mt-10 ">
               <figure><img src={p.image} alt="Shoes" className='h-80 w-full ' /></figure>
               <div className="card-body">
                 <h2 className="card-title">{p.name}</h2>
                 <p>Price: 20 $</p>
                 <div className="card-actions justify-end">
                   <button className="btn btn-primary">Buy Now</button>
                 </div>
               </div>
             </div>
         )
        }
        </div>
        </div>
        </>
        
        
    );
};

export default Products;