/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { getAllCartItems, removeCartItemFromLS } from "../utils/cart_script";
import { CartContext } from "../routes/New1";
import { Link } from "react-router-dom";

const Cart = ({ gadgets }) => {
  const [, setCart] = useContext(CartContext);

  // State to hold all added carts
  const [allAddedCarts, setAllAddedCarts] = useState([]);
  const [cartdata, setCartdata] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch and set cart items from localStorage when the component mounts
  useEffect(() => {
    setAllAddedCarts(getAllCartItems());
  }, []);

  useEffect(() => {
    // Filter gadgets based on IDs in `allAddedCarts` and set to `cartdata`
    const filteredData = gadgets.filter((gadget) =>
      allAddedCarts.includes(gadget.product_id)
    );
    setCartdata(filteredData);

    // Calculate total price
    const calculatedPrice = filteredData.reduce(
      (sum, item) => sum + item.price,
      0
    );
    setTotalPrice(calculatedPrice);
  }, [allAddedCarts, gadgets]);

  // Handle the "Purchase" button click
  const handlePurchase = () => {
    localStorage.removeItem("carts"); // Clear the carts data from localStorage
    setAllAddedCarts([]);
    setCart(0); // Set Cart context to reflect an empty cart
  };

  const handleDelete = (id) => {
    removeCartItemFromLS(id); // Remove item from local storage
    setAllAddedCarts(getAllCartItems());
    setCart(allAddedCarts.length - 1);
  };

  const sortByPriceDesc = () => {
    const sortedData = [...cartdata].sort((a, b) => b.price - a.price);
    setCartdata(sortedData);
  };

  return (
    <section>
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-2xl">Cart</h4>
        <div className="flex space-x-4 items-center">
          <h6 className="font-bold">Total Cost: ${totalPrice}</h6>
          <button
            onClick={sortByPriceDesc}
            className="text-[#9538E2] py-1 px-3 rounded-full border border-purple-600"
          >
            Sort by Price
            <i className="fa-solid fa-arrow-down-wide-short ml-2"></i>
          </button>
          <button
            // onClick={handlePurchase}
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="bg-[#9538E2] text-white py-1 px-3 rounded-full "
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="mt-6">
        {cartdata.map((item, idx) => (
          <div key={idx} className="flex gap-10 border rounded-xl p-10 m-3">
            <div>
              <img
                className="w-[200px] object-cover rounded-xl"
                src={item.product_image}
                alt=""
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col justify-center items-start space-y-6">
                <h4 className="text-2xl font-bold">{item.product_title}</h4>
                <p className="font-thin">{item.description}</p>
                <p className="font-bold">Price: ${item.price}</p>
              </div>

              <button
                onClick={() => handleDelete(item.product_id)}
                className="flex justify-end items-end"
              >
                <i className="fa-regular fa-circle-xmark text-3xl text-red-600"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
          <div className="flex items-center justify-center">
            <img
              className="w-[50px] mb-3"
              src={`group.png`}
              alt="confirmation"
            />
          </div>
          <h3 className="font-bold text-lg">Payment Successfully</h3>
          <p className="py-4">Thanks for purchasing.</p>
          <h6>Total Price: {totalPrice}</h6>
          <div className="modal-action flex items-center justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/"} className="btn" onClick={handlePurchase}>
                Close
              </Link>
            </form>
          </div>
        </div>
      </dialog>
      {/* ---------------------------------------------------------------- */}
    </section>
  );
};

export default Cart;
