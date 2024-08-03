import React from "react";
import ProductCard from "../../_components/product-card";

const Page = () => {
  return (
    <div className="px-10">
      <h1 className="text-3xl py-6 font-bold">Products</h1>

      <div className="grid grid-cols-4 gap-4 py-9">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
