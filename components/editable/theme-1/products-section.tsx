import ProductCard from "@/app/store/_components/product-card";
import { Button } from "@/components/ui/button";
import { useApplyRef } from "@/hooks/useApplyRef";
import React from "react";

interface IProductsSectionProps {
  title: string;
}

export const ProductsSection = ({ title }: IProductsSectionProps) => {
  const { applyRef } = useApplyRef();

  return (
    <div ref={applyRef} className="px-10 mt-10 pb-9 border-b">
      <h1 className="mb-8 text-2xl font-bold">{title}</h1>

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
