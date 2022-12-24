import React from "react";


const Report = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-5">Reported <span className="text-green-500">products</span></h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead >
            <tr>
              <th></th>
              <th>Product</th>
              <th>Seller</th>
              <th>Reporter Email</th>
              <th>Details</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>Avocado</td>
              <td>Elon mask</td>
              <td>reporter@gmail.com</td>
              <td><button className="btn btn-xs rounded btn-success text-white">Details</button> </td>
              <td className="text-center"><button className="btn btn-xs rounded btn-success text-white">Cancel</button> <button className="btn btn-xs rounded btn-error text-white">Delete</button></td>
            </tr>
            <tr className="hover">
              <th>2</th>
              <td>Potato</td>
              <td>Elon mask</td>
              <td>reporter@gmail.com</td>
              <td><button className="btn btn-xs rounded btn-success text-white">Details</button> </td>
              <td className="text-center"><button className="btn btn-xs rounded btn-success text-white">Cancel</button> <button className="btn btn-xs rounded btn-error text-white">Delete</button></td>
            </tr>
            <tr className="hover">
              <th>3</th>
              <td>Tomato</td>
              <td>Elon mask</td>
              <td>reporter@gmail.com</td>
              <td><button className="btn btn-xs rounded btn-success text-white">Details</button> </td>
              <td className="text-center"><button className="btn btn-xs rounded btn-success text-white">Cancel</button> <button className="btn btn-xs rounded btn-error text-white">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
