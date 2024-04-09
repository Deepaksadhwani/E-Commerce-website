import React from "react";
import { productsArr } from "../utils/constants";
import Card from "../components/Card";

const Store = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-400">
      <h1 className=" p-4 font-serif  text-4xl font-semibold text-gray-700">
        Music
      </h1>
      <div className="  mt-10 grid grid-cols-2 gap-x-40 gap-y-20">
        {productsArr.map((item) => (
          <Card url={item.imageUrl} price={item.price} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Store;
