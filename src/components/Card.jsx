import React from "react";

const Card = ({ title, url, price }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={url} alt="image-logo" />
      <h3>{title}</h3>
      <div>
        <p>💲{price}</p>
        <button></button>
      </div>
    </div>
  );
};

export default Card;
