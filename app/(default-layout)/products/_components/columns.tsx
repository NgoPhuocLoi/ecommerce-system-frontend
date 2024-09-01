"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table/column-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { Product } from "@/app/interfaces/product";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
    cell({ row: { original } }) {
      return (
        <div className="flex items-center gap-2">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="40"
            src={
              "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
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
      const value = row.original.is_active ? "active" : "inactive";
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
    accessorKey: "available_quantity",
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
    accessorKey: "category.name",
    header: "Category",
  },
];
