import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContextProvider";
import { TiShoppingCart } from "react-icons/ti";

const NavBar = () => {
  const [shouldCartVisible, setShouldCartVisible] = useState(false);
  const { cartDataArray, setCartDataArray} = useContext(CartContext);
  const { userIsLoggedIn, logoutHandler } = useContext(CartContext);
  const activeClass = "text-yellow-300";

  return (
    <div className="relative flex items-center justify-center border-b-4 border-red-700 bg-black p-4">
      <div className="flex w-3/12 justify-evenly text-xl font-medium text-white">
        <NavLink
          to="/"
          onClick={() => setShouldCartVisible(false)}
          className={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/store"
          onClick={() => setShouldCartVisible(true)}
          className={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Store
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setShouldCartVisible(false)}
          className={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setShouldCartVisible(false)}
          className={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Contact us
        </NavLink>
      </div>
      <NavLink to="/resetpassword" className="absolute right-28 rounded-lg bg-gray-500 px-3 py-2 font-semibold text-white transition-all duration-300 top-3  hover:bg-gray-600">
        Change Password
      </NavLink>
      {userIsLoggedIn && (
        <button
          onClick={() => logoutHandler()}
          className="btn absolute right-8 top-3 text-white"
        >
          Logout
        </button>
      )}
      {shouldCartVisible && (
        <NavLink to="/cart" onClick={()=> setCartDataArray((prev) => [...prev])} >
          <button className="absolute right-[278px] top-3 flex items-center gap-x-2 rounded-lg bg-yellow-600 py-[6px] px-2 text-xl font-medium text-white transition-all duration-300 hover:bg-yellow-700">
            <TiShoppingCart />
            Cart
            <span className="text-md font-semibold text-yellow-300 ">
              {cartDataArray.length}
            </span>
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default NavBar;
