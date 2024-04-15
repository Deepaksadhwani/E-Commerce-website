import React from "react";
import { productsArr } from "../utils/constants";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Store = () => {
  return (
    <div className="mb-[-24px] flex flex-col items-center justify-center bg-white pb-40 ">
      <h1 className=" p-4 font-serif  text-4xl font-semibold text-gray-700">
        Music
      </h1>
      <div className="  mt-10 grid grid-cols-2 gap-x-40 gap-y-20">
        {productsArr.map((item, index) => (
          <Link to={`/store/${index}`}>
            <Card
              key={index}
              url={item.imageUrl}
              price={item.price}
              title={item.title}
              index={index}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Store;
