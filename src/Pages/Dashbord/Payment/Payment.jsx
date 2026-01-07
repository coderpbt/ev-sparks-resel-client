import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import CheckoutForm from './CheckoutForm';
import Loading from '../../../component/Sheard/Loading/Loading';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';

// Load your Stripe publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: booking, isLoading } = useQuery({
    queryKey: ['booking', id],
    queryFn: async () => {
      const token = localStorage.getItem('accessToken');
      const res = await fetch(`https://reseller-ev.vercel.app/bookings/${id}`, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      });
      
      if (!res.ok) {
        throw new Error('Failed to load booking');
      }
      
      return res.json();
    }
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h3 className="text-3xl mb-5 font-bold">Payment</h3>
      
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h4 className="text-xl font-semibold mb-4 text-black">Order Details</h4>
        <div className="space-y-2">
          <p className='text-black'><span className="font-semibold">Product:</span> {booking?.productName}</p>
          <p className='text-black'><span className="font-semibold">Seller:</span> {booking?.sellerName}</p>
          <p className='text-black'><span className="font-semibold">Price:</span> ${booking?.reselPrice}</p>
          <p className='text-black'><span className="font-semibold">Location:</span> {booking?.locationmetting}</p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h4 className="text-xl font-semibold mb-4">Payment Information</h4>
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;