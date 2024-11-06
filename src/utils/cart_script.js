import toast from "react-hot-toast";

const getAllCartItems = () => {
  try {
    const all = localStorage.getItem("carts");
    return all ? JSON.parse(all) : [];
  } catch (error) {
    console.error("Failed to parse cart items from localStorage:", error);
    return [];
  }
};

const addToCart = (item) => {
  const carts = getAllCartItems();

  const isExist = carts.find((cart) => parseInt(cart) === parseInt(item));

  if (isExist) {
    toast.error("Item already exists in the cart");
    return;
  }

  carts.push(item);
  localStorage.setItem("carts", JSON.stringify(carts));
  toast.success("Item added to the cart successfully");
};

const removeCartItemFromLS = (id) => {
  // console.log(id);
  const carts = getAllCartItems();
  // console.log(carts);
  const remaining = carts.filter((item) => item !== id);

  localStorage.setItem("carts", JSON.stringify(remaining));
  toast.success("Item removed from the cart successfully");
};

export { addToCart, getAllCartItems, removeCartItemFromLS };
