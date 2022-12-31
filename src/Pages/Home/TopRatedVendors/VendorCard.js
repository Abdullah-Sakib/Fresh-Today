import React from "react";

const VendorCard = ({ vendor }) => {
  const { name, image, orders } = vendor;

  return (
    <div className="card card-side bg-slate-50 shadow-2xl h-40 mx-2 w-full">
      <figure className="w-1/2 lg:w-1/4">
        <img className="h-full" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Orders completed: {orders}</p>
        <div className="rating">
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
      </div>
      </div>
    </div>
  );
};

export default VendorCard;
