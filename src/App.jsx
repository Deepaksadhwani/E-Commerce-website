import React, { useState } from "react";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Login from "./pages/Login";

const App = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  return isLogIn ? (
    <Login onAddLogin={setIsLogIn} />
  ) : (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
