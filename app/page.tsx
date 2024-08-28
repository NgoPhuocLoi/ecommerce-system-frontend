import ShopSelection from "@/components/shop-selection/shop-selection";
import LogoutButton from "./auth/_components/logout-button";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0">
        <LogoutButton />
      </div>
      <ShopSelection />
    </>
  );
}
