import React, { useContext, useState } from "react";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Login from "./pages/Login";
import { CartContext } from "./contexts/CartContextProvider";

const App = () => {
  const { userIsLoggedIn } = useContext(CartContext);

  return userIsLoggedIn ? (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <Login />
  );
};

export default App;
