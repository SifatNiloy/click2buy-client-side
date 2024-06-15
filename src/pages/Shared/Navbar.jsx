import { useContext, useState } from "react";
import {
  HiMenu,
  HiShoppingCart,
  HiOutlineUserCircle,
  HiOutlineLogout,
  HiOutlineCog,
  HiChevronDown,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "../../assets/logo.png";
import useAdmin from "../../hooks/useAdmin";
import useCart from "../../hooks/useCart";
import useWindowSize from "../../hooks/useWindowSize";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [orders] = useCart();
  const { width } = useWindowSize();

  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const toggleShopDropdown = () => setShopDropdownOpen(!isShopDropdownOpen);
  const toggleMoreDropdown = () => setMoreDropdownOpen(!isMoreDropdownOpen);

  const closeDropdowns = () => {
    setShopDropdownOpen(false);
    setMoreDropdownOpen(false);
  };

  const navItems = (
    <>
      <li className="text-base font-semibold hover:text-[#58C9C3] transition duration-200 ease-in-out relative">
        <Link to="/">Home</Link>
      </li>
      <li className="text-base font-semibold hover:text-[#58C9C3] transition duration-200 ease-in-out relative">
        <button
          className="flex items-center space-x-1"
          onClick={toggleShopDropdown}
        >
          <span>Shop</span>
          <HiChevronDown />
        </button>
        <ul
          className={`dropdown-content absolute top-full left-0 mt-2 lg:mt-0 lg:left-auto lg:right-0 p-2 shadow-lg bg-white text-black rounded-md w-52 z-20 border border-gray-200 ${
            isShopDropdownOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to="/shop" className="hover:bg-[#8388EA] p-2 rounded-md">
              All Products
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="hover:bg-[#8388EA] p-2 rounded-md"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link to="/offers" className="hover:bg-[#8388EA] p-2 rounded-md">
              Special Offers
            </Link>
          </li>
        </ul>
      </li>
      <li className="text-base font-semibold hover:text-[#58C9C3] transition duration-200 ease-in-out">
        <Link to="/about">About</Link>
      </li>
      <li className="text-base font-semibold hover:text-[#58C9C3] transition duration-200 ease-in-out">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="text-base font-semibold hover:text-[#58C9C3] transition duration-200 ease-in-out relative">
        <button
          className="flex items-center space-x-1"
          onClick={toggleMoreDropdown}
        >
          <span>More</span>
          <HiChevronDown />
        </button>
        <ul
          className={`dropdown-content absolute top-full left-0 mt-2 lg:mt-0 lg:left-auto lg:right-0 p-2 shadow-lg bg-white text-black rounded-md w-52 z-20 border border-gray-200 ${
            isMoreDropdownOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to="/sell" className="hover:bg-[#8388EA] p-2 rounded-md">
              Sell
            </Link>
          </li>
          <li>
            <Link to="/support" className="hover:bg-[#8388EA] p-2 rounded-md">
              Support
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:bg-[#8388EA] p-2 rounded-md">
              FAQ
            </Link>
          </li>
        </ul>
      </li>
      {user ? (
        <li className="text-base font-semibold mt-1 relative">
          <Link to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>
            <HiShoppingCart className="inline-block mr-1" />
            <span className="badge badge-secondary absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white">
              {orders?.length || 0}
            </span>
          </Link>
        </li>
      ) : null}
      {user ? (
        <li className="text-base font-semibold hover:text-[#58C9C3] transition duration-200 ease-in-out">
          <Link to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>
            Dashboard
          </Link>
        </li>
      ) : null}
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-[#8388EA] via-[#8388EA] to-[#58C9C3] text-white shadow-lg z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={closeDropdowns}
          >
            <HiMenu className="text-2xl" />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[30] p-2 shadow bg-white text-black rounded-md w-52 border border-gray-200"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Click2Buy Logo" className="h-10" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navItems}</ul>
      </div>
      <div className="navbar-end space-x-4">
  {user?.email ? (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        className="btn btn-success flex items-center space-x-2"
      >
        <HiOutlineUserCircle className="text-xl" />
        <span>{user?.displayName?.split(" ")[0]}</span>
        {width > 640 && (
          <img
            className="rounded-full w-8 h-8 ml-2"
            src={user?.photoURL}
            alt="User"
          />
        )}
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[30] menu p-2 shadow bg-white rounded-md w-52 text-black border border-gray-200"
      >
        <li className="p-2">
          <Link
            to="/userProfile"
            className="flex items-center space-x-2 hover:bg-[#8388EA] rounded-md p-2"
          >
            <HiOutlineCog />
            <span>Edit Profile</span>
          </Link>
        </li>
        <li className="p-2">
          <button
            onClick={logOut}
            className="flex items-center space-x-2 hover:bg-[#8388EA] rounded-md p-2"
          >
            <HiOutlineLogout />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  ) : (
    <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-4 py-2 rounded-md shadow-md transition duration-200 ease-in-out">
      <Link to="/login">Login</Link>
    </button>
  )}
</div>

    </div>
  );
};

export default Navbar;
