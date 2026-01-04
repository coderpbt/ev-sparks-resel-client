import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';
import { FaBolt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-gray-950/95 backdrop-blur-lg border-b border-emerald-900">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <FaBolt className="text-3xl lg:text-4xl text-emerald-400" />
          <h1 className="text-2xl lg:text-3xl font-orbitron text-emerald-400 tracking-wider">EV Sparks</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-lg font-semibold">
          <NavLink to="/home" className="text-gray-300 hover:text-emerald-400 transition">Home</NavLink>
          <NavLink to="/shop" className="text-gray-300 hover:text-emerald-400 transition">Shop</NavLink>
          <NavLink to="/blog" className="text-gray-300 hover:text-emerald-400 transition">Blog</NavLink>

          {user?.uid ? (
            <>
              <NavLink to="/myproduct" className="text-gray-300 hover:text-emerald-400 transition">My Product</NavLink>
              <NavLink to="/dashboard" className="text-gray-300 hover:text-emerald-400 transition">Dashboard</NavLink>
            </>
          ) : null}

          {/* Auth Section */}
          {user?.uid ? (
            <div className="flex items-center gap-5">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-emerald-400 ring-offset-2 ring-offset-gray-950">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="Profile" />
                  ) : (
                    <div className="bg-emerald-600 w-full h-full flex items-center justify-center text-white font-bold text-sm">
                      {user?.displayName?.charAt(0).toUpperCase() || 'U'}
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={logOut}
                className="text-gray-300 hover:text-red-400 transition font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="text-gray-300 hover:text-emerald-400 transition">
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-emerald-400 text-2xl"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-emerald-900">
          <div className="px-6 py-8 flex flex-col gap-6 text-lg font-semibold">
            <NavLink
              to="/home"
              className="text-gray-300 hover:text-emerald-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
             <NavLink
              to="/shop"
              className="text-gray-300 hover:text-emerald-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink
              to="/blog"
              className="text-gray-300 hover:text-emerald-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </NavLink>

            {user?.uid ? (
              <>
                <NavLink
                  to="/myproduct"
                  className="text-gray-300 hover:text-emerald-400 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Product
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className="text-gray-300 hover:text-emerald-400 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </NavLink>

                <div className="flex items-center gap-4 pt-6 border-t border-emerald-800">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-emerald-400 ring-offset-2 ring-offset-gray-900">
                      {user?.photoURL ? (
                        <img src={user.photoURL} alt="Profile" />
                      ) : (
                        <div className="bg-emerald-600 w-full h-full flex items-center justify-center text-white font-bold text-xl">
                          {user?.displayName?.charAt(0).toUpperCase() || 'U'}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={logOut}
                    className="text-red-400 hover:text-red-300 font-medium"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <NavLink
                to="/login"
                className="text-emerald-400 font-bold text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;