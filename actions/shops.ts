"use server";

import { SHOP_API } from "@/constants";
import { authenticatedFetch } from "@/utils/fetch";
import { auth } from "@clerk/nextjs/server";

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

export const createShop = async (data: {
  name: string;
  domain: string;
  themeId: string;
}) => {
  const token = await auth().getToken();
  if (!token) {
    return null;
  }
  try {
    const res = await authenticatedFetch(SHOP_API, "POST", token, {
      ...data,
      hasUsedPlatformBefore: true,
      hasConfirmedEmail: true,
      themeId: Number(data.themeId),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  } catch (error) {
    console.log("[Shop action]: Error when creating shop");
  }
};
