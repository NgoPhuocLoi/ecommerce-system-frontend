import ShopSelection from "@/components/shop-selection/shop-selection";
import LogoutButton from "./auth/_components/logout-button";

export default function Home() {
  return (
    <>
      <div className="fixed left-0 top-0">
        <LogoutButton />
      </div>
      <ShopSelection />
    </>
  );
}
