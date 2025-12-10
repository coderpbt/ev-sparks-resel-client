import React from 'react';
import PopularProduct from '../PopularProduct/PopularProduct';

const Services = () => {
 
  return (
    <>
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-orbitron mb-16 text-emerald-400">Why EV Sparks?</h2>
            <div className="grid md:grid-cols-4 gap-10">
              <div className="bg-gray-900 p-10 rounded-2xl card-hover">
                <i className="fa-solid fa-shield-halved text-6xl text-emerald-400 mb-4"></i>
                <h3 className="text-2xl font-bold">100% Verified Sellers</h3>
              </div>
              <div className="bg-gray-900 p-10 rounded-2xl card-hover">
                <i className="fa-solid fa-bolt text-6xl text-cyan-400 mb-4"></i>
                <h3 className="text-2xl font-bold">Instant Booking</h3>
              </div>
              <div className="bg-gray-900 p-10 rounded-2xl card-hover">
                <i className="fa-solid fa-truck-fast text-6xl text-yellow-400 mb-4"></i>
                <h3 className="text-2xl font-bold">Nationwide Delivery</h3>
              </div>
              <div className="bg-gray-900 p-10 rounded-2xl card-hover">
                <i className="fa-solid fa-handshake text-6xl text-purple-400 mb-4"></i>
                <h3 className="text-2xl font-bold">Zero Commission</h3>
              </div>
            </div>
          </div>
       </section>
       <PopularProduct />
        <section className="py-20 bg-gradient-to-r from-emerald-900 to-cyan-900">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 text-center">
            <div>
              <h3 className="text-6xl font-orbitron text-white">50K+</h3>
              <p className="text-2xl mt-4">Happy Buyers</p>
            </div>
            <div>
              <h3 className="text-6xl font-orbitron text-white">12K+</h3>
              <p className="text-2xl mt-4">Cars Sold</p>
            </div>
            <div>
              <h3 className="text-6xl font-orbitron text-white">4.9</h3>
              <p className="text-2xl mt-4">User Rating</p>
            </div>
            <div>
              <h3 className="text-6xl font-orbitron text-white">24/7</h3>
              <p className="text-2xl mt-4">Support</p>
            </div>
          </div>
        </section>


        <section id="sell" className="py-20 bg-black text-center">
          <h2 className="text-6xl font-orbitron mb-10">Sell Your Car in 5 Minutes</h2>
          <p className="text-2xl text-gray-400 mb-10">Get the best price • Reach 100,000+ buyers instantly</p>
          <button className="bg-emerald-500 text-black px-16 py-6 rounded-full text-2xl font-bold hover:bg-emerald-400 glow">
            Post Your Ad Free Now
          </button>
        </section>


        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-orbitron text-center mb-16 text-cyan-400">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-black p-8 rounded-2xl border border-emerald-800">
                <p className="text-lg italic">"Sold my Premio in just 3 days! Best platform in Bangladesh"</p>
                <p className="mt-6 font-bold text-emerald-400">- Rahman, Dhaka</p>
              </div>
                            <div className="bg-black p-8 rounded-2xl border border-emerald-800">
                <p className="text-lg italic">"Sold my Premio in just 3 days! Best platform in Bangladesh"</p>
                <p className="mt-6 font-bold text-emerald-400">- Rahman, Dhaka</p>
              </div>
                            <div className="bg-black p-8 rounded-2xl border border-emerald-800">
                <p className="text-lg italic">"Sold my Premio in just 3 days! Best platform in Bangladesh"</p>
                <p className="mt-6 font-bold text-emerald-400">- Rahman, Dhaka</p>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Services;