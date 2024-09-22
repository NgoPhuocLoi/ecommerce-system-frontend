import { Input } from "@/components/ui/input";
import { Gift, ShoppingCart, UserRound } from "lucide-react";

interface IShopHeaderProps {}

export const ShopHeader = ({}: IShopHeaderProps) => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto flex h-20 max-w-[1170px] items-center justify-between py-2">
          <div className="flex items-center gap-8">
            <h1 className="text-4xl font-bold">VAULT</h1>
            <nav className="flex gap-4">
              <p className="cursor-pointer text-gray-600 hover:text-gray-800">
                Home
              </p>
              <p className="cursor-pointer text-gray-600 hover:text-gray-800">
                Product
              </p>
              <p className="cursor-pointer text-gray-600 hover:text-gray-800">
                Contact
              </p>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <Input placeholder="Search" />
            <div className="flex items-center gap-4">
              <UserRound
                className="cursor-pointer hover:text-green-400"
                size={22}
              />
              <ShoppingCart
                className="cursor-pointer hover:text-green-400"
                size={22}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ShopHeader.craft = {
  props: {
    disableEdit: true,
  },
};
