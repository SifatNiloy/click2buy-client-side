import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaRegCalendarAlt, FaWallet } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="drawer fixed top-0 left-0 h-screen flex items-center justify-center">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
        <label htmlFor="my-drawer" className="btn text-center btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
        //   className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-blue-100 text-base-content">
          
          <li>
            <NavLink to="/">
              <AiFillHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaRegCalendarAlt /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myorders">
              <HiShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <FaWallet /> Payment History
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <AiFillHome /> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
