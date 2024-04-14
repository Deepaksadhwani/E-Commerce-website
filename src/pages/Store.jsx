import React from "react";
import { productsArr } from "../utils/constants";
import Card from "../components/Card";

const Store = () => {

  const addCartHandler = {
      
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white pb-40 mb-[-24px] ">
      <h1 className=" p-4 font-serif  text-4xl font-semibold text-gray-700">
        Music
      </h1>
      <div className="  mt-10 grid grid-cols-2 gap-x-40 gap-y-20">
        {productsArr.map((item, index) => (
          <Card key={index} url={item.imageUrl} price={item.price} title={item.title} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Store;
