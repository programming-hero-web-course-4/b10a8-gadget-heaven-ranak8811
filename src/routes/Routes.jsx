import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Gadgets from "../pages/Gadgets";
import Details from "../pages/Details";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../fakeGadgets.json"),
          },
          {
            path: "/category/:category",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../fakeGadgets.json"),
          },
        ],
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("../fakeGadgets.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../fakeGadgets.json"),
      },
      {
        path: "/statistic",
        element: <Statistics></Statistics>,
        loader: () => fetch("../fakeGadgets.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default routes;
