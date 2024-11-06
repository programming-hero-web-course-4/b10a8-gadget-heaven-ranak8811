/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { getAllCartItems, removeCartItemFromLS } from "../utils/cart_script";
import { CartContext } from "../routes/New1";
import { useNavigate } from "react-router-dom";

const Cart = ({ gadgets }) => {
  const [, setCart] = useContext(CartContext);

  const [allAddedCarts, setAllAddedCarts] = useState([]);
  const [cartdata, setCartdata] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setAllAddedCarts(getAllCartItems());
  }, []);

  useEffect(() => {
    const filteredData = gadgets.filter((gadget) =>
      allAddedCarts.includes(gadget.product_id)
    );
    setCartdata(filteredData);

    const calculatedPrice = filteredData.reduce(
      (sum, item) => sum + item.price,
      0
    );
    setTotalPrice(calculatedPrice);
  }, [allAddedCarts, gadgets]);

  const handlePurchase = () => {
    localStorage.removeItem("carts");
    setAllAddedCarts([]);
    setCart(0);
    navigate("/");
  };

  const handleDelete = (id) => {
    removeCartItemFromLS(id);
    setAllAddedCarts(getAllCartItems());
    setCart(allAddedCarts.length - 1);
  };

  const sortByPriceDesc = () => {
    const sortedData = [...cartdata].sort((a, b) => b.price - a.price);
    setCartdata(sortedData);
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h4 className="font-bold text-2xl mb-4 md:mb-0">Cart</h4>
        <div className="flex space-x-4 flex-col md:flex-row items-center">
          <h6 className="font-bold mb-3 md:mb-0">Total Cost: ${totalPrice}</h6>
          <div className="flex gap-3">
            <button
              onClick={sortByPriceDesc}
              className="text-[#9538E2] py-1 px-3 rounded-full border border-purple-600"
            >
              Sort by Price
              <i className="fa-solid fa-arrow-down-wide-short ml-2"></i>
            </button>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              disabled={getAllCartItems().length === 0}
              className={`bg-[#9538E2] text-white py-1 px-3 rounded-full ${
                getAllCartItems().length === 0
                  ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                  : ""
              }`}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {cartdata.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center md:flex-row gap-10 border rounded-xl p-10 m-3 justify-between"
          >
            <div className="flex flex-col items-center md:flex-row gap-10">
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
              </div>
            </div>

            <div>
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
              <button className="btn" onClick={handlePurchase}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      {/* ---------------------------------------------------------------- */}
    </section>
  );
};

export default Cart;
