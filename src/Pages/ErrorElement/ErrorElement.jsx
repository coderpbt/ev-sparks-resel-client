import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
  return (
    <div className='font-semibold min-h-screen flex items-center justify-center text-center flex-col'>
      <h3 className='text-white text-4xl'>404 Not Found!!!</h3>
      <Link className='text-blue-400 block mt-5 text-2xl underline' to="/">Back To Home</Link>
    </div>
  );
};

export default ErrorElement;