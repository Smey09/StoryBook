"use client";

import React, { useEffect, useState } from "react";
import DashboardCard from "../Atomic/DashboardCard";

interface Product {
  id: number;
  name: string;
  model: string;
  brand: string;
  price: number;
  description: string;
  about: string;
  image: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data-1.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mx-8 my-4">
      <div className="grid gap-1">
        <div className="flex h-[40px] items-center bg-blue-300 rounded-sm border border-red-300 font-semibold">
          <div className="flex-1 text-center">ID</div>
          <div className="flex-1 text-center">Name</div>
          <div className="flex-1 text-center">Model</div>
          <div className="flex-1 text-center">Brand</div>
          <div className="flex-1 text-center">Price</div>
        </div>
        {products.map((product) => (
          <DashboardCard
            key={product.id}
            id={product.id}
            name={product.name}
            model={product.model}
            brand={product.brand}
            price={`${product.price} USD`}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
