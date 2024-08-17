import React from "react";
import { columns, Product } from "./columns";
import { DataTable } from "@/components/ui/data-table";

const products: Product[] = [
  {
    id: "product-1",
    name: "Product 1",
    imageUrl:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 200,
    status: "active",
    quantity: 20,
    totalSales: 20,
    createdAt: new Date(),
    category: "Apparel & Accessories",
    link: "/products/1",
  },
  {
    id: "product-2",
    name: "Product 2 ",
    imageUrl:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 200,
    status: "draft",
    quantity: 10,
    totalSales: 20,
    createdAt: new Date(),
    category: "Apparel & Accessories",
    link: "/products/2",
  },
];

const ProductTable = () => {
  return (
    <div>
      <DataTable columns={columns} data={products} />
    </div>
  );
};

export default ProductTable;
