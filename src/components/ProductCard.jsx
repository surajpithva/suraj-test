import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-black text-white hover:bg-gray-800 py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
