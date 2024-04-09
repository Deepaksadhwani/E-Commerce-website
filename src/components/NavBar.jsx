import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center border-b-4 border-red-700 bg-black p-4">
      <div className="flex w-3/12 justify-evenly text-xl font-medium text-white">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/store">
          <button>Store</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
