import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

const URL = "https://crudcrud.com/api/8ce7907393e54fe18df566aef0a4c664/data";

const CartContextProvider = ({ children }) => {
  const getData = async () => {
    const response = await axios.get(URL);
    const data = response.data.map((item) => ({
      title: item.title,
      url: item.url,
      price: item.price,
    }));
    return data;
  };

  const [cartDataArray, setCartDataArray] = useState([]);
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setCartDataArray((prev) => [...prev,data]);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


useEffect(() => {
  console.log("Updated cartDataArray:", cartDataArray);
}, [cartDataArray]);

  return (
    <div>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
