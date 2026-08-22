import { useContext, useEffect, useRef, useState } from "react";
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
  const navRef = useRef(null);

  const toggleShopDropdown = () => setShopDropdownOpen(!isShopDropdownOpen);
  const toggleMoreDropdown = () => setMoreDropdownOpen(!isMoreDropdownOpen);

  const closeDropdowns = () => {
    setShopDropdownOpen(false);
    setMoreDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) closeDropdowns();
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") closeDropdowns();
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navItems = (
    <>
      <li className="text-base font-semibold hover:text-[#58C9C3] transition duration-200 ease-in-out relative">
        <Link to="/" onClick={closeDropdowns}>Home</Link>
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
          className={`dropdown-content absolute top-full left-0 mt-2 lg:mt-0 lg:left-auto lg:right-0 p-1 shadow-lg bg-white text-black rounded-lg w-48 z-20 border border-[#dedfd8] ${
            isShopDropdownOpen ? "block" : "hidden"
          }`}
        >
            <li>
              <Link to="/shop" onClick={closeDropdowns} className="block rounded px-3 py-2 text-sm hover:bg-[#0d7b72] hover:text-white">
              All Products
            </Link>
          </li>
          <li>
              <Link
                to="/shop"
                onClick={closeDropdowns}
                className="block rounded px-3 py-2 text-sm hover:bg-[#0d7b72] hover:text-white"
            >
              Categories
            </Link>
          </li>
          <li>
              <Link to="/shop" onClick={closeDropdowns} className="block rounded px-3 py-2 text-sm hover:bg-[#0d7b72] hover:text-white">
              Special Offers
            </Link>
          </li>
        </ul>
      </li>
      <li className="text-base font-semibold hover:text-[#58C9C3] transition duration-200 ease-in-out">
        <Link to="/about" onClick={closeDropdowns}>About</Link>
      </li>
      <li className="text-base font-semibold hover:text-[#58C9C3] transition duration-200 ease-in-out">
        <Link to="/contact" onClick={closeDropdowns}>Contact Us</Link>
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
          className={`dropdown-content absolute top-full left-0 mt-2 lg:mt-0 lg:left-auto lg:right-0 p-1 shadow-lg bg-white text-black rounded-lg w-48 z-20 border border-[#dedfd8] ${
            isMoreDropdownOpen ? "block" : "hidden"
          }`}
        >
          <li>
              <Link to="/sell" onClick={closeDropdowns} className="block rounded px-3 py-2 text-sm hover:bg-[#0d7b72] hover:text-white">
              Sell
            </Link>
          </li>
          <li>
              <Link to="/support" onClick={closeDropdowns} className="block rounded px-3 py-2 text-sm hover:bg-[#0d7b72] hover:text-white">
              Support
            </Link>
          </li>
          <li>
              <Link to="/faq" onClick={closeDropdowns} className="block rounded px-3 py-2 text-sm hover:bg-[#0d7b72] hover:text-white">
              FAQ
            </Link>
          </li>
        </ul>
      </li>
      {user ? (
        <li className="text-base font-semibold mt-1 relative">
          <Link onClick={closeDropdowns} to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>
            <HiShoppingCart className="inline-block mr-1" />
            <span className="badge badge-secondary absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white">
              {orders?.length || 0}
            </span>
          </Link>
        </li>
      ) : null}
      {user ? (
        <li className="text-base font-semibold hover:text-[#58C9C3] transition duration-200 ease-in-out">
          <Link onClick={closeDropdowns} to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>
            Dashboard
          </Link>
        </li>
      ) : null}
    </>
  );

  return (
    <div ref={navRef} className="navbar min-h-0 sticky top-0 z-30 bg-[#e3efeb] px-4 py-2 text-[#254b46] shadow-lg md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost h-9 min-h-0 w-9 p-1 text-[#254b46] lg:hidden"
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
          <img src={logo} alt="Click2Buy Logo" className="h-8 md:h-9" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8 px-1 text-[#254b46]">{navItems}</ul>
      </div>
      <div className="navbar-end space-x-2">
  {user?.email ? (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
              className="flex items-center space-x-2 bg-[#c9e2dc] px-3 py-2 text-[#254b46]"
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
              className="dropdown-content z-[30] menu p-1 shadow-lg bg-white rounded-lg w-48 text-black border border-[#dedfd8]"
      >
        <li className="p-2">
          <Link
            to="/userProfile"
            onClick={closeDropdowns}
                  className="flex items-center space-x-2 rounded-md p-2 text-sm hover:bg-[#0d7b72] hover:text-white"
          >
            <HiOutlineCog />
            <span>Edit Profile</span>
          </Link>
        </li>
        <li className="p-2">
          <button
            onClick={logOut}
                  className="flex items-center space-x-2 rounded-md p-2 text-sm hover:bg-[#0d7b72] hover:text-white"
          >
            <HiOutlineLogout />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  ) : (
    <button className="bg-[#ef765f] px-4 py-2 font-bold text-white shadow-md transition duration-200 ease-in-out hover:bg-[#d85e4b]">
      <Link to="/login">Login</Link>
    </button>
  )}
</div>

    </div>
  );
};

export default Navbar;
