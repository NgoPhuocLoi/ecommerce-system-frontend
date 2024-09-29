import { redirect } from "@/i18n/routing";
import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";

export const authenticatedFetch = (
  url: string,
  method: string,
  accessToken: string,
  body?: Record<string, unknown>,
) => {
  return fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const tenantSpecificFetch = async ({
  url,
  method,
  body,
}: {
  url: string;
  method: string;
  body?: any;
}) => {
  const token = await auth().getToken();
  const selectedShopId = cookies().get("selectedShopId");
  if (!token || !selectedShopId) {
    return redirect("/sign-in");
  }
  return fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "x-shop-id": selectedShopId.value,
    },
    body: JSON.stringify(body),
  });
};
