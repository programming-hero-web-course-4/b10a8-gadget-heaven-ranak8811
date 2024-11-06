/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext(0);
export const WishContext = createContext(0);

const New1 = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [wish, setWish] = useState(0);
  return (
    <WishContext.Provider value={[wish, setWish]}>
      <CartContext.Provider value={[cart, setCart]}>
        {children}
      </CartContext.Provider>
    </WishContext.Provider>
  );
};

export default New1;
