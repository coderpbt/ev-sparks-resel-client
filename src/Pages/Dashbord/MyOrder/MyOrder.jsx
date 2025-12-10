import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../../component/Sheard/Loading/Loading';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';

const MyOrder = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const { data: bookings = [], isLoading, isError, error } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const token = localStorage.getItem('accessToken');
            
            console.log('Token from localStorage:', token); // Debug
            console.log('User email:', user?.email); // Debug
            
            if (!token) {
                throw new Error('No access token found');
            }

            const res = await fetch(
                `http://localhost:5000/bookings?email=${user?.email}`, 
                {
                    headers: {
                        'authorization': `Bearer ${token}`
                    }
                }
            );

            console.log('Response status:', res.status); // Debug

            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem('accessToken');
                // Optional: logout user
                // logOut();
                throw new Error('Unauthorized - Please login again');
            }

            if (!res.ok) {
                throw new Error(`Failed to load orders: ${res.statusText}`);
            }

            const data = await res.json();
            console.log('Bookings data:', data); // Debug
            return data;
        },
        enabled: !!user?.email,
        retry: false
    });

    if (isLoading) return <Loading />;

    if (isError) {
        return (
            <div className="text-center py-10">
                <div className="text-red-600 text-xl mb-4">
                    Error: {error.message}
                </div>
                {error.message.includes('Unauthorized') && (
                    <Link to="/login" className="btn btn-primary">
                        Go to Login
                    </Link>
                )}
            </div>
        );
    }

    if (bookings.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500 text-xl">
                No orders yet
            </div>
        );
    }

    return (
        <div className="p-5">
            <h3 className="text-3xl mb-5 font-bold">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-black'>
                            <th>#</th>
                            <th>Seller</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, i) => (
                            <tr className='text-black' key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.sellerName}</td>
                                <td>{booking.productName}</td>
                                <td>{booking.bookinDate}</td>
                                <td>{booking.locationmetting}</td>
                                <td>
                                    {booking.reselPrice && !booking.paid && (
                                        <Link className="btn btn-primary btn-sm text-white" to={`/dashboard/payment/${booking._id}`}>
                                            Pay
                                        </Link>
                                    )}
                                    {booking.paid && (
                                        <span className="font-bold text-black">Paid</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;