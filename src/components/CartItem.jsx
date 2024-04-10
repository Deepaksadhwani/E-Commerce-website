import React from "react";

const CartItem = ({ title, price, url }) => {
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-4 shadow-md">
      <div className="flex  items-center">
        <img src={url} alt="" className="w-24 h-24 object-cover rounded-lg mr-6" />
        <div>
          <h1 className="text-lg font-semibold mb-2">{title}</h1>
          <p className="text-red-600 font-medium">${price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center border border-gray-300 rounded-md px-2">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <input
            type="text"
            className="w-12 text-center focus:outline-none"
            value="1"
            readOnly
          />
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
        <button className="text-white bg-red-500 px-4 py-2 ml-4 rounded-md hover:bg-red-600 focus:outline-none">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
