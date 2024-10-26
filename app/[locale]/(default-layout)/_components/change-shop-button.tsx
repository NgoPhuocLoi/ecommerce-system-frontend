"use client";

import { useRouter } from "@/i18n/routing";
import { deleteCookie } from "cookies-next";

const ChangeShopButton = () => {
  const router = useRouter();
  const handleChangeShop = () => {
    deleteCookie("selectedShopId");
    router.push("/");
  };

  return <div onClick={handleChangeShop}>Đổi cửa hàng</div>;
};

export default ChangeShopButton;
