import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const localStorageData = JSON.parse(localStorage.getItem("card"));
  const [cartDataArray, setCartDataArray] = useState(
    localStorageData ? [localStorageData] : [],
  );
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    const remainingTime = calculateRemainingTime(expirationTime);
    setTimeout(logoutHandler, 60000 * 5);
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
