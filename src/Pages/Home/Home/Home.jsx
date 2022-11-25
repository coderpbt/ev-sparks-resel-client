import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import ProductDelevery from '../ProductDelevery/ProductDelevery';
import Services from '../Services/Services';

const Home = () => {

  return (
    <div>
      <Banner />
      <Catagory />
      {/* <Services /> */}
      <ProductDelevery />
    </div>
  );
};

export default Home;