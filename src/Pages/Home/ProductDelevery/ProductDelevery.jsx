import React from 'react';
import dev from '../../../images/shutterstock_353170508-scaled.webp'

const ProductDelevery = () => {

  return (
    <div className='xl:w-[1200px] mx-auto w-[95%]'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 pt-2 justify-center items-center py-8'>
       
        <div>
          <h2 className='text-4xl font-bold mb-5'>Get items delivered to you safely & securely with</h2>
          <p>I truly believe Augustine’s words are true and if you look at history you know it is true. There are many people in the world with amazing talents who realize only a small percentage of their potential. We all know people who live this truth.</p>
        </div>

        <div>
            <img src={dev} alt="dev u" />
        </div>
      </div>
    </div>
  );
};

export default ProductDelevery;