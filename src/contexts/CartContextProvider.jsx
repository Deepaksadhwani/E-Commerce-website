import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartDataArray, setCartDataArray] = useState([]);

  const data = {
    setCartDataArray,
    cartDataArray,
  };

  return (
    <div>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
