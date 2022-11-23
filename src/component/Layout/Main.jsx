import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheard/Footer/Footer';
import Header from '../Sheard/Header/Header';

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;