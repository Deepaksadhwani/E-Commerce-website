import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { productsArr } from "../utils/constants";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContextProvider";
const ProductPage = () => {
  const { setCartDataArray } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const addToCart = () => {
    setCartDataArray((prev) => [
      ...prev,
      { url: product.imageUrl, title: product.title, price: product.price },
    ]);
  };

  useEffect(() => {
    const selectedProduct = productsArr[productId];
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="mb-40 flex flex-col items-center text-center">
          <h2 className="mb-4 text-2xl font-semibold">Loading...</h2>
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
        <img
          className="h-64 w-full object-cover"
          src={product.imageUrl}
          alt={product.title}
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{product.title}</div>
          <p className="text-base text-gray-700">Price: ${product.price}</p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <button
            onClick={addToCart}
            className="inline-flex items-center rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
