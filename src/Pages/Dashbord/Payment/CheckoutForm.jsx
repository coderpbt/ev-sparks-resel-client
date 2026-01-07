import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ booking }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const { reselPrice, email, productName, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const token = localStorage.getItem('accessToken');
    
    fetch('https://reseller-ev.vercel.app/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ price: reselPrice })
    })
      .then(res => res.json())
      .then(data => {
        setClientSecret(data.clientSecret);
      })
      .catch(err => {
        setError('Failed to initialize payment');
        console.error(err);
      });
  }, [reselPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    setError('');
    setProcessing(true);

    // Confirm the payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
            name: productName
          }
        }
      }
    );

    if (error) {
      setError(error.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      // Update booking with payment info
      const token = localStorage.getItem('accessToken');
      const payment = {
        transactionId: paymentIntent.id,
        email: email,
        bookingId: _id
      };

      fetch(`https://reseller-ev.vercel.app/bookings/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            setSuccess('Payment completed successfully!');
            setProcessing(false);
            setTimeout(() => {
              navigate('/dashboard');
            }, 2000);
          }
        })
        .catch(err => {
          setError('Payment succeeded but failed to update order');
          setProcessing(false);
        });
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6 p-4 border rounded">
        <CardElement options={cardStyle} />
      </div>

      {error && (
        <div className="alert alert-error mb-4">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {success && (
        <div className="alert alert-success mb-4">
          <p className="text-green-600">{success}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing || !clientSecret}
        className="btn btn-primary w-full"
      >
        {processing ? 'Processing...' : `Pay $${reselPrice}`}
      </button>
    </form>
  );
};

export default CheckoutForm;