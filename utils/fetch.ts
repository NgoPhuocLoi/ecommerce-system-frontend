import { redirect } from "@/i18n/routing";
import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";

export const authenticatedFetch = async (
  url: string,
  method: string,
  accessToken: string,
  body?: Record<string, unknown>,
  tag?: string,
) => {
  return fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    next: {
      tags: [tag ?? ""],
    },
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

export const extractMetadataFromResponse = async (
  res: Response,
  fallback?: object,
) => {
  if (!res.ok) {
    return fallback ?? null;
  }

  const data = await res.json();
  if (data.statusCode !== 200 && data.statusCode !== 201) {
    return fallback ?? null;
  }

  return data.metadata;
};
