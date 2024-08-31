import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Shop } from "./shop-selection";

interface IShopListProps {
  shops: Shop[];
}

const ShopList = ({ shops }: IShopListProps) => {
  return (
    <div className="flex flex-1 flex-col gap-1 overflow-auto py-3">
      {shops?.map((shop) => (
        <Link
          href={"/dashboard"}
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
        </Link>
      ))}
    </div>
  );
};

export default ShopList;
