"use client";
import React from "react";
import { Shop } from "./shop-selection";
import { ChevronRight } from "lucide-react";
import { updateSession } from "@/auth";
import { useRouter } from "next/navigation";
import { handleUpdateSession } from "@/actions/auth";

interface IShopListProps {
  shops: Shop[];
}

const ShopList = ({ shops }: IShopListProps) => {
  const router = useRouter();

  const handleSelectShop = async (shop: Shop) => {
    await handleUpdateSession({
      selectedShopId: shop.id,
    });
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-1 flex-col gap-1 overflow-auto py-3">
      {shops.map((shop) => (
        <div
          onClick={() => {
            handleSelectShop(shop);
          }}
          key={shop.id}
          className="group flex cursor-pointer items-center gap-2 rounded-md p-3 duration-75 hover:bg-gray-100"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-green-400 text-xs">
            {shop.name[0]}
          </div>

          <div className="duration-100 group-hover:translate-x-1">
            <p className="text-sm font-bold">{shop.name}</p>
            <p className="text-xs">test-store@gmail.com</p>
          </div>

          <div className="ml-auto hidden group-hover:block">
            <ChevronRight />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopList;
