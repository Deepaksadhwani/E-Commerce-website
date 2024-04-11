import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider";

const CartItem = ({ title, price, url, index }) => {
  const { cartDataArray, setCartDataArray } = useContext(CartContext);

  const removeHandler = () => {
    cartDataArray.splice(index,1);
    setCartDataArray([]);
  }

  return (
    <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-200 p-4 shadow-md">
      <div className="flex  items-center">
        <img
          src={url}
          alt=""
          className="mr-6 h-24 w-24 rounded-lg object-cover"
        />
        <div>
          <h1 className="mb-2 text-lg font-semibold">{title}</h1>
          <p className="font-medium text-red-600">${price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center rounded-md border border-gray-300 px-1">
         
          <input
            type="text"
            className="w-6 text-center focus:outline-none"
            value="1"
            readOnly
          />
 
        </div>
        <button onClick={removeHandler} className="ml-4 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
