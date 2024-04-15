import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider";

const Card = ({ title, url, price }) => {
  const { setCartDataArray } = useContext(CartContext);

  const addCartInContextHandler = (event) => {
    event.preventDefault();
    setCartDataArray((prev) => [...prev, { title, url, price }]);
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center space-y-1 rounded-md  bg-gray-100 p-4 transition-all duration-200 hover:scale-[1.08] ">
      <h3 className="border-b-1 text-xl flex border-gray-700">{title}</h3>

      <img src={url} alt="image-logo" />
      <div className="flex w-full items-center justify-between p-2 font-semibold ">
        <p>💲{price}</p>
        <button
          onClick={addCartInContextHandler}
          className="rounded-md bg-blue-500 p-2 text-white transition-all duration-100  hover:bg-blue-600"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Card;
