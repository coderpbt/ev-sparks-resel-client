import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/DpiContext/ContextProvider';
import useAdmin from '../../hooks/useAdmin';
import Header from '../Sheard/Header/Header';

const DashbordLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
        <Header />
        <div className="drawer drawer-mobile">
          <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 text-base-content">
              <li><Link to="/dashboard">My Order</Link></li>
              
               {
                    isAdmin && <>
                       <li><Link to="/dashboard/allseller">All users</Link></li>
                       <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                    </>
                }
  
            </ul>
  
          </div>
        </div>
      </div>
    );
};

export default DashbordLayout;