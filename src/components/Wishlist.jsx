/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import {
  getAllWishlistItems,
  removeWishlistItemFromLS,
} from "../utils/wishList_script";
import { CartContext, WishContext } from "../routes/New1";
import { addToCart } from "../utils/cart_script";

const Wishlist = ({ gadgets }) => {
  const [wish, setWish] = useContext(WishContext);
  const [cart, setCart] = useContext(CartContext);

  const [wishedGadgets, setWishedGadgets] = useState([]);

  useEffect(() => {
    setWishedGadgets(getAllWishlistItems());
  }, []);

  const desiredGadgets = gadgets.filter((item) =>
    wishedGadgets.includes(item.product_id)
  );

  const handleDelete = (id) => {
    removeWishlistItemFromLS(id);
    setWish(wish - 1);
    setWishedGadgets(getAllWishlistItems());
  };

  const handleAddToCart = (id) => {
    addToCart(id);
    setCart(cart + 1);
  };

  return (
    <div>
      <div className="text-2xl font-bold">Wishlist</div>
      <br />
      <div>
        {desiredGadgets.map((item, idx) => (
          <div key={idx} className="flex gap-10 border rounded-xl p-10 m-3">
            <div>
              <img
                className="w-[200px] object-cover rounded-xl"
                src={item.product_image}
                alt=""
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col justify-center items-start space-y-4">
                <h4 className="text-2xl font-bold">{item.product_title}</h4>
                <p className="font-thin">
                  <span className="font-bold">Description:</span>{" "}
                  {item.description}
                </p>
                <p className="font-bold">Price: ${item.price}</p>

                <button
                  onClick={() => handleAddToCart(item.product_id)}
                  className="btn rounded-full bg-[#9538E2] text-white mr-3"
                >
                  Add To Cart <i className="fa-solid fa-cart-shopping"></i>
                </button>
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
    </div>
  );
};

export default Wishlist;
