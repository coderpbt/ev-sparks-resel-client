import React, { useEffect, useState } from 'react';
import CatagoryWiseProductTem from '../../CatagoryWiseProduct/CatagoryWiseProductTem';
import BookingModal from '../../CatagoryWiseProduct/BookingModal/BookingModal';
import PrivateRoute from '../../../context/PrivateRoute/PrivateRoute';

const PopularProduct = () => {
    const [popular, setPopular] = useState([]);
    const [book, setBook] = useState(null);
    const date = new Date().toLocaleTimeString()
    useEffect(()=>{
      fetch('https://reseller-ev.vercel.app/productswise/popular')
        .then(res => res.json())
        .then(data => setPopular(data));
    },[])
  return (
    <div className='xl:w-[1200px] mx-auto w-[95%] py-10 lg:py-20'>
         <h2 className="text-2xl md:text-5xl font-orbitron mb-9 lg:mb-16 text-cyan-400">
            Popular Product
         </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-2'>
          {
            popular.map(item =>
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
                <PrivateRoute>
                  <BookingModal 
                  book={book}
                  setBook={setBook}
                  />
                </PrivateRoute>
            }
      </div>
  );
};

export default PopularProduct;