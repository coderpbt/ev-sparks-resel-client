import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';



const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  return (
    <div className='bg-[#3e0c0c]'>
        <div className='xl:w-[1200px] mx-auto w-[95%]'>
          <div className="navbar py-8">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li className='text-black mx-4'><NavLink to='/home'>Home</NavLink></li>
                  <li className='text-black mx-4'><NavLink to='/blog'>Blog</NavLink></li>
                  {
                    user?.uid ?
                      <>
                         <li className='text-black mx-4'><NavLink to='/myproduct'>My Product</NavLink></li>
                        <li className='text-black mx-4'><NavLink to='/dashboard'>Dashbord</NavLink></li>
                        <li>
                            <label tabIndex={0} className="avatar">
                              <div className="rounded-full">
                                {user?.photoURL && <img className='profile-img' src={user?.photoURL} alt='' />}
                              </div>
                            </label>
                        </li>
                        <button onClick={logOut} className='text-black'>log Out</button>
                      </>
                      :
                      <>
                        <li className='text-black mx-4'><NavLink to='/login'>Login</NavLink></li>
                      </>
                  } 
                </ul>
              </div>

              <Link to='/' className="font-bold capitalize text-white text-xl">Ev Sparks</Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal p-0">
                  <li className='text-white mx-4'><NavLink to='/home'>Home</NavLink></li>
                  <li className='text-white mx-4'><NavLink to='/blog'>Blog</NavLink></li>
                  {
                    user?.uid ?
                      <>
                        <li className='text-white mx-4'><NavLink to='/myproduct'>My Product</NavLink></li>
                        <li className='text-white mx-4'><NavLink to='/dashboard'>Dashbord</NavLink></li>
                        <li>
                            <label tabIndex={0} className="avatar">
                              <div className="rounded-full">
                                {user?.photoURL && <img className='profile-img' src={user?.photoURL} alt='' />}
                              </div>
                            </label>
                        </li>
                        <button onClick={logOut} className='text-white'>log Out</button>
                      </>
                      :
                      <>
                        <li className='text-white mx-4'><NavLink to='/login'>Login</NavLink></li>
                      </>
                  } 
                </ul>
              </div>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
          </div>
        </div>
      </div>
  );
};

export default Header;