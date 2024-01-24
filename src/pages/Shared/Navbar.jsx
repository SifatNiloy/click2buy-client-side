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
    <div className="navbar bg-sky-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>

  );
};

export default Navbar;
