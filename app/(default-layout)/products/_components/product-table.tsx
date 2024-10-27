import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Product } from "@/app/interfaces/product";
import { getProducts } from "@/actions/product";

const ProductTable = async () => {
  const productRes = await getProducts();
  console.log({ productRes });
  const products: Product[] = productRes.metadata ?? [];
  // console.log({ products });
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
