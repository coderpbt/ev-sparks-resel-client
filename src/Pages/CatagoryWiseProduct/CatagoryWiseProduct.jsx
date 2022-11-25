import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import CatagoryWiseProductTem from './CatagoryWiseProductTem';

const CatagoryWiseProduct = () => {
  const [book, setBook] = useState(null);
  const catagoryProduct = useLoaderData();
  const date = new Date().toLocaleTimeString()
  console.log(catagoryProduct)
  
  return (
    <div className='xl:w-[1200px] mx-auto w-[95%]'>
      <div className="flex justify-between flex-wrap my-10">
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-2'>
          {
            catagoryProduct.map(item =>
               <CatagoryWiseProductTem
                date = {date}
                key={item._id}
                item={item}
                setBook={setBook}
                />)
          }
        </div>
           {
                book && 
                <BookingModal 
                book={book}
                setBook={setBook}
                />
            }
      </div>
    </div>
  );
};

export default CatagoryWiseProduct;