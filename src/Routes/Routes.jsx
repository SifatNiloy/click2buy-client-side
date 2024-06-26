import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import AddItem from "../pages/Dashboard/AddItem";
import AdminHome from "../pages/Dashboard/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers";
import ManageProducts from "../pages/Dashboard/ManageProducts";
import MyOrders from "../pages/Dashboard/MyOrders";
import Payment from "../pages/Dashboard/Payment";
import Reservation from "../pages/Dashboard/Reservation";
import UserHome from "../pages/Dashboard/UserHome";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Sell from "../pages/Sell/Sell";
import NotFound from "../pages/Shared/NotFound";
import Private from "../pages/Shared/Private";
import Shop from "../pages/Shop/Shop";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "./Profile";
import Support from "../pages/Support/Support";
import FAQ from "../pages/FAQ/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/sell",
        element: <Sell />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/userProfile",
        element: <Profile />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/private",
        element: (
          <PrivateRoutes>
            <Private></Private>

          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "adminhome",
        element: (
          <AdminRoutes>
            <AdminHome />
          </AdminRoutes>
        ),
      },
      {
        path: "myorders",
        element: <MyOrders />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path: "addItem",
        element: (
          <AdminRoutes>
            <AddItem />
          </AdminRoutes>
        ),
      },
      {
        path: "manageproducts",
        element: (
          <AdminRoutes>
            <ManageProducts />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
