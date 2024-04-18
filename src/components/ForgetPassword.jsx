import React, { useContext, useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { CartContext } from "../contexts/CartContextProvider";
import { NavLink,  } from "react-router-dom";

const ForgetPassword = () => {
  const { token } = useContext(CartContext);
  const [showStatus, setShowStatus] = useState("");
  const newPasswordRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredPassword = newPasswordRef.current.value;
    const message = checkValidData(null, null, enteredPassword);
    setShowStatus(message);
    if (message) return;
  
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBvxV-KzJD5h2_F7XOq4dDRaoAJH3NPNFY",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-type": "application/json",
          },
        },
      );

      if (response.ok) {
        setShowStatus("Password changed successfully 🔐");
      } else {
        const data = await response.json();
        setShowStatus(data.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setShowStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50   ">
      <div className="rounded-lg bg-white p-8 shadow-lg shadow-gray-800">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Change Password
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <input
            type="password"
            ref={newPasswordRef}
            placeholder="Enter New Password"
            className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className=" font-medium text-red-800 ">{showStatus}</p>

          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-indigo-700"
          >
            Change Password
          </button>
          <NavLink to="/" className="btn capitalize text-center">
            Go Back Home
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
