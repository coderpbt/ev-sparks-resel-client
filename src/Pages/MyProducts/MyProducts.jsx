import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/DpiContext/ContextProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/productswise?email=${user?.email}`

    const {data : productswise = []} = useQuery({
        queryKey : ['productswise', user?.email ],
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
                        productswise?.map((booking, i) => <tr key={booking._id}>
                            <th>{i+1}</th>
                            <td>{booking.email}</td>
                            <td>{booking.name}</td>
                            
                           
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyProducts;