import { PRODUCTS_API } from "@/constants";
import { tenantSpecificFetch } from "@/utils/fetch";

export const getProducts = async () => {
  const res = await tenantSpecificFetch({
    url: PRODUCTS_API,
    method: "GET",
  });

  if (!res) {
    return null;
  }

  return await res.json();
};
