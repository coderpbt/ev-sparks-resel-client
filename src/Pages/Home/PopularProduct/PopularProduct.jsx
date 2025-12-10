import React, { useEffect, useState } from 'react';
import CatagoryWiseProductTem from '../../CatagoryWiseProduct/CatagoryWiseProductTem';
import BookingModal from '../../CatagoryWiseProduct/BookingModal/BookingModal';

const PopularProduct = () => {
    const [popular, setPopular] = useState([]);
    const [book, setBook] = useState(null);
    const date = new Date().toLocaleTimeString()
    useEffect(()=>{
      fetch('http://localhost:5000/productswise/popular')
        .then(res => res.json())
        .then(data => setPopular(data));
    },[])
  return (
    <div className='xl:w-[1200px] mx-auto w-[95%] py-20'>
        <h2 className="text-5xl font-orbitron mb-16 text-emerald-400">Popular Product</h2>
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
                <BookingModal 
                book={book}
                setBook={setBook}
                />
            }
      </div>
  );
};

export default PopularProduct;