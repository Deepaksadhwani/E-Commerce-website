import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { productsArr } from "../utils/constants";

const ProductPage = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product based on the productId
    const selectedProduct = productsArr[productId];
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center flex flex-col items-center mb-40">
          <h2 className="text-2xl font-semibold mb-4">Loading...</h2>
          <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          className="h-64 w-full object-cover"
          src={product.imageUrl}
          alt={product.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">Price: ${product.price}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;