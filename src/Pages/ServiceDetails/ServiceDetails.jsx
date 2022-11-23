import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from '../../component/Sheard/Comment/Comment';
import useHooks from '../../component/Sheard/Hooks/useHooks';

const ServiceDetails = () => {
  useHooks('Service Details');
  const servicesData = useLoaderData();

  const newReview = useLoaderData()
  const [reviwes, setReviwes] = useState([])
  const [refresh,setRefresh] = useState(false)

  useEffect(() => {
    fetch(`https://b6a11-service-review-server-side-coderpbt.vercel.app/reviews/${newReview._id}`)
      .then(res => res.json())
      .then(data => {
        setRefresh(!refresh)
        setReviwes(data)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])

  return (
    <div className='bg-[#fff]'>
      <div className='xl:w-[800px] mx-auto w-[95%]'>
        <div className="card card-compact shadow-xl pt-9">

          <figure><img src={servicesData.image_url} alt="logos" /></figure>
          <div className="card-body">
            <div className='flex justify-between items-center'>
              <h2 className="card-title text-lg text-left text-black">{servicesData.title}</h2>
            </div>
            <div className='flex justify-between'>
              <h2 className="card-title text-base text-black">Sevices Cost : $ {servicesData.price} </h2>
            </div>
            <p className="text-base text-justify text-black">
              {servicesData.details}
            </p>
            <div className='py-14'>
              <h2 className='text-3xl text-black mb-5'>Reviews</h2>

              {
                reviwes?.map(reviweItem =>
                  <div key={reviweItem._id}>
                   
                    <div className='flex border p-2 mb-5'>
                      <div className='mr-4'>
                        <img className='w-[100px]' src={reviweItem?.user} alt="" />
                      </div>
                      <div>
                        <h2 className='text-black font-bold text-xl'>{reviweItem.customer}</h2>
                        <p>{reviweItem.textarea}</p>
                        <p>{reviweItem.time}</p>
                      </div>
                    </div>

                  </div>
                )
              }

            </div>

          </div>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;