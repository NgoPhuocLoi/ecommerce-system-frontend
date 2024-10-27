import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ProductCard from "./product-card";

const FeaturedCollection = () => {
  return (
    <div className="px-10 mt-10 pb-9 border-b">
      <h1 className="mb-8 text-2xl font-bold">Featured products</h1>

      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <ProductCard />
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <Button>View all</Button>
      </div>
    </div>
  );
};

export default FeaturedCollection;
