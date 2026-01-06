import React, { useEffect, useState } from 'react';
import BookingModal from '../CatagoryWiseProduct/BookingModal/BookingModal';
import CatagoryWiseProductTem from '../CatagoryWiseProduct/CatagoryWiseProductTem';
import PrivateRoute from '../../context/PrivateRoute/PrivateRoute';

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [book, setBook] = useState(null);
    const date = new Date().toLocaleTimeString()
    useEffect(()=>{
      fetch('http://localhost:5000/productswise/all')
        .then(res => res.json())
        .then(data => setProduct(data));
    },[])
  return (
    <>
      <div className='xl:w-[1200px] mx-auto w-[95%] py-20'>
        <h2 className="text-3xl font-orbitron mb-16 text-emerald-400">All Products</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-2'>
          {
            product.map(item =>
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
    </>
  );
};

export default Shop;