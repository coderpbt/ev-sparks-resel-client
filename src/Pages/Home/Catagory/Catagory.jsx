import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Catagory = () => {
  // const xxx = useLoaderData();
  const [catagorys, setCatagorys] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/categoris')
    .then(res => res.json())
    .then(data => setCatagorys(data));
  },[])
  


  return (
    <div>
       <div className='flex flex-wrap lg:flex-col'>
        {
          catagorys.map(catagory => <p className='lg:m-3 m-2 text-left' key={catagory._id}>
            <Link className='text-black' to={`/categoris/${catagory._id}`}>{catagory.name}</Link>
          </p>)
        }
      </div>
    </div>
  );
};

export default Catagory;