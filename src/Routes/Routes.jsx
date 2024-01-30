import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import AddItem from "../pages/Dashboard/AddItem";
import AllUsers from "../pages/Dashboard/AllUsers";
import MyOrders from "../pages/Dashboard/MyOrders";
import Payment from "../pages/Dashboard/Payment";
import Reservation from "../pages/Dashboard/Reservation";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Sell from "../pages/Sell/Sell";
import NotFound from "../pages/Shared/NotFound";
import Private from "../pages/Shared/Private";
import Shop from "../pages/Shop/Shop";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

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
    ],
  },
]);
