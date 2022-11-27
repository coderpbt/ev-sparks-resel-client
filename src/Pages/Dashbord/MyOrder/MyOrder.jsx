import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';

const MyOrder = () => {
   const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data : bookings = []} = useQuery({
        queryKey : ['bookings', user?.email ],
        queryFn : async () => {
            const res = await fetch(url, {
                headers : {
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json()
            return data
        }

    })
  return (
    <div>
            <h3 className="text-3xl mb-5">My Order</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Time</th>  
                            <th>Location</th>                 
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.sellerName}</td>
                                <td>{booking.productName}</td>
                                <td>{booking.bookinDate}</td>
                                <td>{booking.locationmetting}</td>
                                <td>
                                    {
                                        booking.resale_price && !booking.paid && 
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-primary'>Pay
                                          </button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <small className='text-primary'>Paid</small>
                                    }
                                </td>
                               
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
  );
};

export default MyOrder;