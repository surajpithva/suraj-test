import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../api/productApi";
import ProductCard from "../../components/ProductCard";

const AllProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">Something went wrong.</p>;

  return (
    <section className="min-h-screen  bg-gray-100 px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">All Products</h2>
      <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
