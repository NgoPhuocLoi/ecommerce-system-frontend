"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table/column-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

export type Product = {
  id: string;
  name: string;
  status: "active" | "draft";
  quantity: number;
  imageUrl: string;
  price: number;
  totalSales: number;
  createdAt: Date;
  category: string;
  link: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
    cell({ row: { original } }) {
      return (
        <div className="flex gap-2 items-center">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="40"
            src={original.imageUrl}
            width="40"
          />
          <p>{original.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
    cell: ({ row }) => {
      const value = row.original.status;
      const isActive = value === "active";
      return (
        <Badge
          variant={isActive ? "default" : "secondary"}
          className={clsx({
            "bg-green-500 hover:bg-green-500": isActive,
          })}
        >
          {value}
        </Badge>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Quantity" />;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Price" />;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
];
