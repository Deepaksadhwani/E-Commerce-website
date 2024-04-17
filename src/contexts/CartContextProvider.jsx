import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartDataArray, setCartDataArray] = useState([]);
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };

  const data = {
    setCartDataArray,
    cartDataArray,
    loginHandler,
    logoutHandler,
    token,
    userIsLoggedIn,
  };

  return (
    <div>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
