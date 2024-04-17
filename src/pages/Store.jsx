import React from "react";
import { productsArr } from "../utils/constants";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Store = () => {
  return (
    <div className="mb-[-24px] flex flex-col items-center justify-center bg-blue-300 pb-40 ">
     
      <div className="  mt-10 grid grid-cols-4 gap-x-10 gap-y-10">
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
