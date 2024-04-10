import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContextProvider";
import { TiShoppingCart } from "react-icons/ti";

const NavBar = () => {
  const [shouldCartVisible, setShouldCartVisible] = useState(false);
  const { cartDataArray } = useContext(CartContext);
  return (
    <div className=" relative flex items-center justify-center border-b-4 border-red-700 bg-black p-4">
      <div className="flex w-3/12 justify-evenly text-xl font-medium text-white">
        <Link to="/">
          <button onClick={() => setShouldCartVisible(false)}>Home</button>
        </Link>
        <Link to="/store">
          <button onClick={() => setShouldCartVisible(true)}>Store</button>
        </Link>
        <Link to="/about">
          <button onClick={() => setShouldCartVisible(false)}>About</button>
        </Link>
      </div>
      {shouldCartVisible && (
        <Link to="/cart">
          <button className="absolute  right-16 top-4 flex items-center gap-x-2 text-xl font-medium text-white">
            <TiShoppingCart/>
            Cart <span className="text-md  font-semibold text-yellow-300 shadow-lg shadow-orange-50">{cartDataArray.length}</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
