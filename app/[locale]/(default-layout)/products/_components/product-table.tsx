import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Product } from "@/app/interfaces/product";
import { getProducts } from "@/actions/product";

const ProductTable = async () => {
  const products: Product[] = (await getProducts()).metadata;
  console.log({ products });
  // const
  return (
    <div>
      <DataTable
        columns={columns}
        data={products.map((product) => ({
          ...product,
          link: `/products/${product.id}`,
        }))}
      />
    </div>
  );
};

export default ProductTable;
