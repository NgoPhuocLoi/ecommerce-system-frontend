import { SHOP_API } from "@/constants";
import { authenticatedFetch } from "@/utils/fetch";

export const createNewShop = async (shopName: string, accessToken: string) => {
  const res = await authenticatedFetch(SHOP_API, "POST", accessToken, {
    name: shopName,
  });
  return await res.json();
};

export const getShops = async (accessToken: string) => {
  const res = await authenticatedFetch(SHOP_API, "GET", accessToken);
  return await res.json();
};
