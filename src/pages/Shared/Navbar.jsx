import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li className="text-lg ">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg ">
        <Link to="/about">About</Link>
      </li>
      <li className="text-lg ">
        <Link to="/shop">Shop</Link>
      </li>
      <li className="text-lg ">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="text-lg ">
        <Link to="/sell">Sell</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-violet-600 h-20 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end pr-12"></div>
    </div>
  );
};

export default Navbar;
