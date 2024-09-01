import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { getProducts } from "@/app/services/product";
import { Product } from "@/app/interfaces/product";

const ProductTable = async () => {
  const products: Product[] = (await getProducts()).metadata;
  console.log({ products });
  // const
  return (
    <div>
      <DataTable columns={columns} data={products} />
    </div>
  );
};

export default ProductTable;
