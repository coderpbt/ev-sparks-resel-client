import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/DpiContext/ContextProvider";
import useAdmin from "../../hooks/useAdmin";
import Header from "../Sheard/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      {/* ===== TOP HEADER ===== */}
      <Header />

      {/* ===== MOBILE DASHBOARD MENU (ROW) ===== */}
      <div className="lg:hidden bg-gray-900 border-b border-emerald-900">
        <div className="flex gap-4 px-4 py-3 overflow-x-auto text-sm font-semibold">
          <Link
            to="/dashboard"
            className="whitespace-nowrap text-white hover:text-emerald-400"
          >
            My Order
          </Link>
          <Link
            to="/dashboard/addproduct"
            className="whitespace-nowrap text-white hover:text-emerald-400"
          >
            Add Product
          </Link>

          {isAdmin && (
            <>
              <Link
                to="/dashboard/allseller"
                className="whitespace-nowrap text-white hover:text-emerald-400"
              >
                All Users
              </Link>
            </>
          )}
        </div>
      </div>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="flex min-h-[calc(100vh-80px)]">
        
        {/* ===== DESKTOP SIDEBAR ===== */}
        <aside className="hidden lg:block w-64 bg-gray-950 border-r border-emerald-900">
          <ul className="menu p-4 text-white">
            <li>
              <Link to="/dashboard">My Order</Link>
            </li>
             <li>
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allseller">All Users</Link>
                </li>
               
              </>
            )}
          </ul>
        </aside>

        {/* ===== PAGE CONTENT (IMPORTANT FIX) ===== */}
        <main className="flex-1 min-w-0 p-4 lg:p-6">
          {/* 
            min-w-0 is REQUIRED for overflow-x to work inside flex
          */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
