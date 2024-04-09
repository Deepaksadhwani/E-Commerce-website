import React from "react";
import { productsArr } from "../utils/constants";
import Card from "../components/Card";

const Store = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className=" p-4 font-serif text-4xl">Music</h1>
      <div className=" grid  grid-cols-2 gap-10 space-x-20">
        {productsArr.map((item) => (
          <Card url={item.imageUrl} price={item.price} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Store;
