import { useState } from "react";
import Cart from "../components/Cart";
import Heading from "../components/Heading";
import Wishlist from "../components/Wishlist";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../public/PageTitle/title";

const Dashboard = () => {
  useTitle("Dashboard");
  const [activeComponent, setActiveComponent] = useState("Cart");
  const allGadgets = useLoaderData();

  return (
    <div>
      <div className="bg-[#9538E2] text-white py-10">
        <div className="md:w-7/12 w-11/12 mx-auto">
          <Heading
            title={"Dashboard"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
        </div>

        <div className="text-center space-x-4 mb-8 flex items-center justify-center">
          <button
            className={`btn rounded-full px-10 ${
              activeComponent === "Cart"
                ? "bg-white text-[#9538E2] text-2xl"
                : ""
            }`}
            onClick={() => setActiveComponent("Cart")}
          >
            Cart
          </button>
          <button
            className={`btn rounded-full px-10 ${
              activeComponent === "Wishlist"
                ? "bg-white text-[#9538E2] text-2xl"
                : ""
            }`}
            onClick={() => setActiveComponent("Wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="mt-10">
        {activeComponent === "Cart" ? (
          <Cart gadgets={allGadgets} />
        ) : (
          <Wishlist gadgets={allGadgets} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
