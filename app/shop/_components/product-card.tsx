import Image from "next/image";
import React from "react";
import product1 from "@/public/images/product-1.jpeg";

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-2 border rounded-md cursor-pointer hover:shadow">
      <Image src={product1} alt="product" />

      <div className="p-2">
        <h4>Gift card</h4>

        <p>From 10 USD</p>
      </div>
    </div>
  );
};

export default ProductCard;
