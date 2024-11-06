import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CartContext, WishContext } from "../routes/New1";
import { getAllCartItems } from "../utils/cart_script";
import { getAllWishlistItems } from "../utils/wishList_script";

const Navbar = () => {
  const location = useLocation();
  const [cart] = useContext(CartContext);
  const [wish] = useContext(WishContext);

  const [totalData, setTotalData] = useState(0);
  useEffect(() => {
    const data = getAllCartItems();
    setTotalData(data.length);
  }, [cart]);

  const [totalWish, setTotalWish] = useState(0);
  useEffect(() => {
    const data = getAllWishlistItems();
    setTotalWish(data.length);
  }, [wish]);

  return (
    <div
      className={`navbar mt-3 ${
        [
          "/",
          "/category/All",
          "/category/Smartphones",
          "/category/Laptops",
          "/category/Smartwatches",
          "/category/Accessories",
        ].includes(location.pathname)
          ? "bg-[#9538E2] text-white  rounded-t-xl"
          : "navbar bg-base-100"
      }`}
    >
      <div className="navbar-start rounded-t-xl">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-400 lg:bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-error"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/statistic"}
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-error"}`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-error"}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-error"}`
              }
            >
              Login
            </NavLink>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-error"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/statistic"}
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-error"}`
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-error"}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-error"}`
            }
          >
            Login
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-4 mr-3">
        <div className="flex relative">
          <i className="fa-solid fa-cart-shopping"></i>
          <p className="absolute -top-4 left-4">{totalData}</p>
        </div>
        <div className="flex relative">
          <i className="fa-solid fa-heart"></i>
          <p className="absolute -top-4 left-4">{totalWish}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
