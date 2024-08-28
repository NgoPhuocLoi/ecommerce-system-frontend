"use server";

import { SHOP_API } from "@/constants";
import { authenticatedFetch } from "@/utils/fetch";

export const getShops = async (accessToken: string) => {
  try {
    const res = await authenticatedFetch(SHOP_API, "GET", accessToken);
    if (res.ok) {
      const data = await res.json();
      return data.metadata;
    }
    return null;
  } catch (error) {
    console.log("[Shop action]: Error when getting shops");
  }
};
