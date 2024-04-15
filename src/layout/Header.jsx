import React from "react";
import NavBar from "../components/NavBar";


const Header = () => {
  return (
    <div>
      <NavBar />
      <div className=" flex h-[200px] justify-center bg-gray-700 p-4 font-serif  text-6xl  font-bold text-gray-200">
        The Generics
      </div>
    </div>
  );
};

export default Header;
