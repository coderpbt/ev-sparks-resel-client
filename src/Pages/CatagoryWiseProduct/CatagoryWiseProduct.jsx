import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryWiseProductTem from './CatagoryWiseProductTem';

const CatagoryWiseProduct = () => {
  const catagoryProduct = useLoaderData()
  console.log(catagoryProduct)
  
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-2'>
          {
            catagoryProduct.map(item => <CatagoryWiseProductTem key={item._id} item={item} />)
          }
        </div>
      </div>
    </div>
  );
};

export default CatagoryWiseProduct;