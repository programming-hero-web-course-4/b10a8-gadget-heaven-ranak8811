import toast from "react-hot-toast";

const getAllWishlistItems = () => {
  try {
    const all = localStorage.getItem("wishlist");
    return all ? JSON.parse(all) : [];
  } catch (error) {
    console.error("Failed to parse wishlist items from localStorage:", error);
    return [];
  }
};

const addToWishlist = (item) => {
  const wishlist = getAllWishlistItems();

  const isExist = wishlist.find((wish) => parseInt(wish) === parseInt(item));

  if (isExist) {
    toast.error("Item already exists in the wishlist");
    return;
  }

  wishlist.push(item);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  toast.success("Item added to the wishlist successfully");
};

const removeWishlistItemFromLS = (id) => {
  const wishlist = getAllWishlistItems();

  const remaining = wishlist.filter((item) => item !== id);

  localStorage.setItem("wishlist", JSON.stringify(remaining));
  toast.success("Item removed from the wishlist successfully");
};

export { addToWishlist, getAllWishlistItems, removeWishlistItemFromLS };
