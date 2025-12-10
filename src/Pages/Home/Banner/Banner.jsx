import React from 'react';
import b1 from '../../../images/banner-01.jpg';
import b2 from '../../../images/banner-02.jpg';

const Banner = () => {
  return (
      <section className=" bg-gradient-to-br from-black via-gray-900 to-emerald-950 flex items-center overflow-hidden">
        <div className="xl:w-[1200px] mx-auto w-[95%] px-6 grid md:grid-cols-[7fr_5fr] items-center gap-8">
          <div className='text-left'>
            <h1 className="text-3xl md:text-7xl font-orbitron font-black leading-tight">
              Buy & Sell Premium<span class="text-emerald-400">  Used Cars in Bangladesh</span>
              
            </h1>
            <p className="text-xl text-gray-300 mt-6">Trusted by 50,000+ buyers • Zero Commission • Verified Sellers</p>
            <div className="mt-10 flex gap-6">
              <button className="bg-emerald-500 text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-emerald-400">Browse Cars</button>
              <button className="border-2 border-emerald-400 px-10 py-5 rounded-full text-xl font-bold hover:bg-emerald-400 hover:text-black">Sell Your Car</button>
            </div>
          </div>
          <div className="relative flex flex-col gap-8 md:gap-12 max-w-5xl mx-auto px-4 py-12">

                <div className="relative ml-auto w-full max-w-lg md:max-w-2xl -mr-8 md:-mr-20">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-3xl -z-10 animate-pulse"></div>
                  <img
                    src={b1}
                    alt="Premium Electric Luxury"
                    className="w-full h-auto rounded-3xl shadow-2xl border border-emerald-500/30 
                              transform hover:scale-105 transition-all duration-700 
                              hover:shadow-emerald-500/40 hover:border-emerald-400"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-gray-950/70 via-transparent to-transparent pointer-events-none"></div>
                </div>

                <div className="relative mr-auto w-full max-w-lg md:max-w-2xl -ml-8 md:-ml-20">
                  <div className="absolute inset-0 bg-cyan-500/25 blur-3xl rounded-3xl -z-10 animate-pulse delay-300"></div>
                  <img
                    src={b2}
                    alt="Ultra Luxury EV"
                    className="w-full h-auto rounded-3xl shadow-2xl border border-cyan-500/40 
                              transform hover:scale-105 transition-all duration-700 
                              hover:shadow-cyan-400/50 hover:border-cyan-300"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">
                    NEW ARRIVAL
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 
                                bg-emerald-500/10 rounded-full blur-3xl -z-20 animate-ping-slow"></div>
              </div>
         
        </div>
      </section>
  );
};

export default Banner;