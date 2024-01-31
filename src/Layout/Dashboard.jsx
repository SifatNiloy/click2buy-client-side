import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaRegCalendarAlt, FaWallet } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-blue-100 text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/">
                  <AiFillHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaRegCalendarAlt /> Add Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageproducts">
                  <MdProductionQuantityLimits /> Manage Products
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsersLine /> Manage users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}

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
