import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { useContext, useEffect, useState } from "react";
import { addToCart } from "../utils/cart_script";
import { CartContext, WishContext } from "../routes/New1";
import { addToWishlist, getAllWishlistItems } from "../utils/wishList_script";
import useTitle from "../../public/PageTitle/title";

const Details = () => {
  useTitle("Details");

  const [cart, setCart] = useContext(CartContext);
  const [wish, setWish] = useContext(WishContext);

  const allGadgets = useLoaderData();
  const { id } = useParams();
  const [gadget, setGadget] = useState({});

  useEffect(() => {
    const singleGadget = allGadgets.find(
      (gadget) => gadget.product_id === parseInt(id)
    );
    setGadget(singleGadget || {});
  }, [allGadgets, id]);

  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specification = [],
    availability,
    rating = 0,
  } = gadget;

  const renderStars = () => {
    const roundedRating = Math.round(rating);
    const maxStars = 5;

    return (
      <div className="rating flex gap-1">
        {[...Array(roundedRating)].map((_, index) => (
          <span key={index} className="text-orange-400 text-2xl">
            &#9733;
          </span>
        ))}

        {[...Array(maxStars - roundedRating)].map((_, index) => (
          <span key={index} className="text-gray-300 text-2xl">
            &#9733;
          </span>
        ))}
      </div>
    );
  };

  const handleAddToCart = (id) => {
    addToCart(id);
    setCart(cart + 1);
  };

  const handleAddToWishlist = (id) => {
    addToWishlist(id);
    setWish(wish + 1);
  };

  return (
    <div className="relative">
      <div className="bg-[#9538E2] text-white p-1 lg:mb-[400px] md:mb-[440px] mb-[850px]">
        <div className="w-7/12 mx-auto">
          <Heading
            title={"Product Details"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
        </div>

        <div className="h-28"></div>
      </div>

      <div className="flex flex-col md:flex-row bg-base-100 rounded-xl gap-6 p-6 absolute lg:top-[180px] lg:right-[100px] md:top-[200px] md:w-10/12 md:mx-auto md:right-[60px] top-[240px] w-11/12 mx-auto right-[18px]">
        <div>
          <img className="w-[425px] rounded-xl" src={product_image} alt="" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{product_title}</h3>
          <h6 className="font-bold">Price: ${price}</h6>
          <div className="bg-[rgba(48,156,8,0.1)] text-[#309C08] px-2 rounded-full inline-block">
            {availability ? "In Stock" : "Out of Stock"}
          </div>

          <p className="text-gray-500">{description}</p>
          <div>
            <h6 className="font-bold mb-2">Specification:</h6>
            <ol
              className="text-gray-500"
              style={{ listStyleType: "decimal", paddingLeft: "20px" }}
            >
              {specification.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ol>
          </div>

          <div>
            <h5>Rating:</h5>
            <div className="flex">
              <span>{renderStars()}</span>
              <span className="bg-[rgba(9,8,15,0.05)] px-2 py-1 ml-2 rounded-full">
                {rating}
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={() => handleAddToCart(product_id)}
              className="btn rounded-full bg-[#9538E2] text-white mr-3"
            >
              Add To Card <i className="fa-solid fa-cart-shopping"></i>
            </button>

            <button
              disabled={getAllWishlistItems().includes(product_id)}
              onClick={() => handleAddToWishlist(product_id)}
              className={`border rounded-full px-2 py-1 text-xl ${
                getAllWishlistItems().includes(product_id)
                  ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                  : "text-black hover:bg-gray-300"
              }`}
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
