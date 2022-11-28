import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Catagory = () => {
  const [catagorys, setCatagorys] = useState([])
  useEffect(() => {
    fetch('https://b612-used-products-resale-server-side-coderpbt.vercel.app/categoris')
    .then(res => res.json())
    .then(data => setCatagorys(data));
  },[])
  


  return (
    <div className='py-12'>
      <div className='xl:w-[800px] mx-auto w-[95%]'>
        <h2 className='text-2xl text-center my-8 font-bold text-black'>Product Category</h2>
        <div className='flex justify-between '>
          {
            catagorys.map(catagory => <p className='lg:m-3 m-2 text-left' key={catagory._id}>
              <Link className='text-black text-3xl font-bold underline' to={`/categoris/${catagory._id}`}>
                {catagory.name}
                </Link>
            </p>)
          }
        </div>
      </div>
    </div>
  );
};

export default Catagory;