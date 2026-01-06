import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Catagory = () => {
  const [catagorys, setCatagorys] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/categoris')
    .then(res => res.json())
    .then(data => setCatagorys(data));
  },[])
  


  return (
    <>
    <section id="categories" className="py-10 lg:py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-2xl md:text-5xl font-orbitron mb-16 text-cyan-400">
      Popular Brands
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
      {catagorys.map((catagory) => (
        <Link
          key={catagory._id}
          to={`/categoris/${catagory._id}`}
          className="block"
        >
          <div className="bg-gray-800 p-8 rounded-2xl 
                          shadow-lg hover:shadow-2xl hover:shadow-emerald-500/40 
                          transform hover:scale-110 
                          transition-all duration-300">
            <h3 className="text-2xl font-bold text-emerald-400">
              {catagory.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
    
        {/* <div className='py-12'>
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
    </div> */}
    
    </>

  );
};

export default Catagory;