import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesTemplate from './ServicesTemplate';

import { PhotoProvider } from 'react-photo-view';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://b6a11-service-review-server-side-coderpbt.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className='bg-[#fff]'>
      <div className='xl:w-[1200px] mx-auto w-[95%]'>
        <div className='w-[100%]'>
          <div className='text-center'>
            <h2 className='text-4xl text-black font-bold pb-7'>Our Services</h2>
            <p className='text-base text-black mb-3'>The best form of health is when you don’t have to worry about it. We believe in the natural way of managing weight. We specialise in adopting long-term lifestyle modifications to maintain a healthy body weight based on personal requirements.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-2'>
           <PhotoProvider>
            {
              services.map(item => <ServicesTemplate key={item._id} item={item} />)
            }
            </PhotoProvider>
          </div>
          <div className="card-actions justify-center py-12">
          <button className="btn btn-primary">
           <Link to='/services'> See All</Link>
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Services;