import React from 'react';

const Abc = () => {
    return (
        <>
  <nav class="fixed top-0 w-full z-50 bg-gray-950/95 backdrop-blur-lg border-b border-emerald-900">
    <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <i class="fa-solid fa-bolt text-4xl text-emerald-400"></i>
        <h1 class="text-3xl font-orbitron text-emerald-400">EV Sparks</h1>
      </div>
      <div class="hidden md:flex gap-10 text-lg font-semibold">
        <a href="#" class="hover:text-emerald-400">Home</a>
        <a href="#featured" class="hover:text-emerald-400">Featured</a>
        <a href="#categories" class="hover:text-emerald-400">Browse</a>
        <a href="#sell" class="hover:text-emerald-400">Sell Car</a>
        <a href="/dashboard" class="hover:text-emerald-400">Dashboard</a>
      </div>
      <button class="bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3 rounded-full font-bold hover:scale-105 glow">
        Post Ad Free
      </button>
    </div>
  </nav>


  <section class="h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 flex items-center">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">
      <div>
        <h1 class="text-6xl md:text-8xl font-orbitron font-black leading-tight">
          Buy & Sell<br />
          <span class="text-emerald-400">Premium Used Cars</span><br />
          in Bangladesh
        </h1>
        <p class="text-xl text-gray-300 mt-6">Trusted by 50,000+ buyers • Zero Commission • Verified Sellers</p>
        <div class="mt-10 flex gap-6">
          <button class="bg-emerald-500 text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-emerald-400">Browse Cars</button>
          <button class="border-2 border-emerald-400 px-10 py-5 rounded-full text-xl font-bold hover:bg-emerald-400 hover:text-black">Sell Your Car</button>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1618843479313-40f8e4f438da?q=80&w=2070" alt="Premium Car" class="rounded-3xl shadow-2xl" />
    </div>
  </section>


  <section id="featured" class="py-20 bg-black">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-5xl font-orbitron text-center mb-16 text-emerald-400">Featured Listings</h2>
      <div class="grid md:grid-cols-3 gap-10">
   
        <div class="bg-white text-black rounded-3xl overflow-hidden card-hover shadow-2xl">
          <img src="https://i.ibb.co.com/5Tpk9WzQ/premio.jpg" alt="Toyota Premio" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold">2016 TOYOTA PREMIO</h3>
            <p class="text-blue-600 text-sm">post by jak</p>
            <p class="text-gray-600">Location: Dhaka Bangladesh • Use: 2 years</p>
            <div class="mt-4 space-y-2">
              <p><span class="font-bold">Original Price:</span> $200,000</p>
              <p class="text-xl font-bold text-emerald-600">Resale Price: $300,000</p>
              <p class="bg-gray-200 inline-block px-3 py-1 rounded-full text-sm">Condition: Good</p>
            </div>
            <button class="mt-6 w-full bg-purple-600 text-white py-4 rounded-full font-bold hover:bg-purple-700">BOOK NOW</button>
          </div>
        </div>

      </div>
    </div>
  </section>


  <section id="categories" class="py-20 bg-gray-900">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-5xl font-orbitron mb-16 text-cyan-400">Popular Brands</h2>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-10">
        <div class="bg-gray-800 p-8 rounded-2xl card-hover"><h3 class="text-2xl font-bold text-emerald-400">Toyota</h3></div>
        <div class="bg-gray-800 p-8 rounded-2xl card-hover"><h3 class="text-2xl font-bold text-red-500">Honda</h3></div>
        <div class="bg-gray-800 p-8 rounded-2xl card-hover"><h3 class="text-2xl font-bold text-blue-400">Nissan</h3></div>
        <div class="bg-gray-800 p-8 rounded-2xl card-hover"><h3 class="text-2xl font-bold text-gray-400">Mazda</h3></div>
        <div class="bg-gray-800 p-8 rounded-2xl card-hover"><h3 class="text-2xl font-bold text-yellow-400">Mitsubishi</h3></div>
        <div class="bg-gray-800 p-8 rounded-2xl card-hover"><h3 class="text-2xl font-bold text-purple-400">Suzuki</h3></div>
      </div>
    </div>
  </section>


  <section class="py-20 bg-black">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-5xl font-orbitron mb-16 text-emerald-400">Why EV Sparks?</h2>
      <div class="grid md:grid-cols-4 gap-10">
        <div class="bg-gray-900 p-10 rounded-2xl card-hover">
          <i class="fa-solid fa-shield-halved text-6xl text-emerald-400 mb-4"></i>
          <h3 class="text-2xl font-bold">100% Verified Sellers</h3>
        </div>
        <div class="bg-gray-900 p-10 rounded-2xl card-hover">
          <i class="fa-solid fa-bolt text-6xl text-cyan-400 mb-4"></i>
          <h3 class="text-2xl font-bold">Instant Booking</h3>
        </div>
        <div class="bg-gray-900 p-10 rounded-2xl card-hover">
          <i class="fa-solid fa-truck-fast text-6xl text-yellow-400 mb-4"></i>
          <h3 class="text-2xl font-bold">Nationwide Delivery</h3>
        </div>
        <div class="bg-gray-900 p-10 rounded-2xl card-hover">
          <i class="fa-solid fa-handshake text-6xl text-purple-400 mb-4"></i>
          <h3 class="text-2xl font-bold">Zero Commission</h3>
        </div>
      </div>
    </div>
  </section>


  <section class="py-20 bg-gradient-to-r from-emerald-900 to-cyan-900">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 text-center">
      <div>
        <h3 class="text-6xl font-orbitron text-white">50K+</h3>
        <p class="text-2xl mt-4">Happy Buyers</p>
      </div>
      <div>
        <h3 class="text-6xl font-orbitron text-white">12K+</h3>
        <p class="text-2xl mt-4">Cars Sold</p>
      </div>
      <div>
        <h3 class="text-6xl font-orbitron text-white">4.9</h3>
        <p class="text-2xl mt-4">User Rating</p>
      </div>
      <div>
        <h3 class="text-6xl font-orbitron text-white">24/7</h3>
        <p class="text-2xl mt-4">Support</p>
      </div>
    </div>
  </section>


  <section id="sell" class="py-20 bg-black text-center">
    <h2 class="text-6xl font-orbitron mb-10">Sell Your Car in 5 Minutes</h2>
    <p class="text-2xl text-gray-400 mb-10">Get the best price • Reach 100,000+ buyers instantly</p>
    <button class="bg-emerald-500 text-black px-16 py-6 rounded-full text-2xl font-bold hover:bg-emerald-400 glow">
      Post Your Ad Free Now
    </button>
  </section>


  <section class="py-20 bg-gray-900">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-5xl font-orbitron text-center mb-16 text-cyan-400">What Our Users Say</h2>
      <div class="grid md:grid-cols-3 gap-10">
        <div class="bg-black p-8 rounded-2xl border border-emerald-800">
          <p class="text-lg italic">"Sold my Premio in just 3 days! Best platform in Bangladesh"</p>
          <p class="mt-6 font-bold text-emerald-400">- Rahman, Dhaka</p>
        </div>
      </div>
    </div>
  </section>


  <footer class="bg-black border-t border-gray-800 py-12">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h1 class="text-4xl font-orbitron text-emerald-400 mb-6">EV Sparks</h1>
      <p class="text-gray-400 text-lg">© 2025 EV Sparks • All Rights Reserved • Bangladesh's #1 Used Car Marketplace</p>
    </div>
  </footer>
        </>
    );
};

export default Abc;
