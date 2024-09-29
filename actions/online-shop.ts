"use server";

import { BACKEND_BASE_URL } from "@/constants";
import { tenantSpecificFetch } from "@/utils/fetch";

export const getPages = async () => {
  const res = await tenantSpecificFetch({
    url: `${BACKEND_BASE_URL}/online-shop/pages`,
    method: "GET",
  });
  const data = await res.json();
  return data;
};

export const createPage = async (name: string) => {
  const res = await tenantSpecificFetch({
    url: `${BACKEND_BASE_URL}/online-shop/pages`,
    method: "POST",
    body: JSON.stringify({ name }),
  });
  const data = await res.json();
  return data;
};