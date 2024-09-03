import { auth } from "@/auth";
import { redirect } from "next/navigation";

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
  const session = await auth();
  if (!session || !session.selectedShopId) {
    return redirect("/auth/login");
  }
  return fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
      "Content-Type": "application/json",
      "x-shop-id": session.selectedShopId,
    },
    body: JSON.stringify(body),
  });
};
