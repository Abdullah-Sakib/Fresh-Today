import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get('transactionId')
    console.log(transactionId)
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>63ad64fc35476313be064ce8</td>
                        </tr>

                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>63ad64fc35476313be064ce8</td>
                        </tr>

                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>63ad64fc35476313be064ce8</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center mt-5 print:hidden'>
                <button onClick={() => window.print()} className="btn btn-active w-1/3">Invoice Download</button>
            </div>
        </div>
    );
};

export default PaymentSuccess;