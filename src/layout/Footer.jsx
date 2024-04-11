import React from "react";
import { FaSpotify } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex w-full items-center text-white justify-between mt-6 bg-cyan-700 h-40 px-40">
        <h1 className="font-bold text-4xl">The Generics</h1>
      <div className="flex items-center space-x-5 text-3xl">
        <NavLink to="https://www.youtube.com/">
          <IoLogoYoutube />
        </NavLink>
        <NavLink to="https://open.spotify.com/">
          <FaSpotify />
        </NavLink>
        <NavLink to="https://www.facebook.com/">
          <FaSquareFacebook />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
