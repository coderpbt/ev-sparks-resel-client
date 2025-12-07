import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-orbitron text-emerald-400 mb-6">EV Sparks</h1>
        <p className="text-gray-400 text-lg">
          © {currentYear} EV Sparks • All Rights Reserved • Bangladesh's #1 Used Car Marketplace
        </p>
      </div>
    </footer>
  );
};

export default Footer;