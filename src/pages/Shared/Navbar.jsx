import { useContext } from "react";
import { HiMenu, HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "../../assets/logo.png";
import useAdmin from "../../hooks/useAdmin";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [orders] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
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

      {user ? (
        <li className="text-lg mt-1">
          <Link to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>
            <HiShoppingCart />
            <span className="badge badge-secondary">
              +{orders?.length || 0}
            </span>
          </Link>
        </li>
      ) : null}
      {user ? (
        <li className="text-lg ">
          <Link to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>
            Dashboard
          </Link>
        </li>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div className="navbar bg-sky-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <HiMenu className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
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
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn  btn-success">
              My Profile <img className="rounded-full w-1/4" src={user?.photoURL} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[3] menu p-2 shadow bg-green-100 rounded-box w-46"
            >
              <li className="p-2">
              <button className="btn btn-accent">
                  <Link to="/userProfile">
                    Edit Profile
                  </Link>
                </button>
              </li>
              <li  className="p-2">
                <button onClick={logOut} className="btn btn-accent">
                  <Link to="/login">
                    Logout - <span>{user?.displayName}</span>{" "}
                  </Link>
                </button>
              </li>
              
            </ul>
          </div>
        ) : (
          <button className="btn btn-accent">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
