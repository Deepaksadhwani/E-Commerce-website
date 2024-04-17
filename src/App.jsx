import React, { useState } from "react";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Login from "./pages/Login";


const App = () => {
  const [showLoginInPage, setShowLoginInPage] = useState(true);
  return showLoginInPage ? (
    <Login onShowPage={setShowLoginInPage} />
  ) : (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
