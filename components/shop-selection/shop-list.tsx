import ShopItem from "./shop-item";
import { Shop } from "./shop-selection";

interface IShopListProps {
  shops: Shop[];
}

const ShopList = ({ shops }: IShopListProps) => {
  return (
    <div className="flex flex-1 flex-col gap-1 overflow-auto py-3">
      {shops?.map((shop) => <ShopItem key={shop.id} shop={shop} />)}
    </div>
  );
};

export default ShopList;
