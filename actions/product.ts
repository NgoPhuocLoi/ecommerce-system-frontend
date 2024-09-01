"use server";

import { CreateProductData } from "@/app/interfaces/product";
import { PRODUCTS_API } from "@/constants";
import { tenantSpecificFetch } from "@/utils/fetch";

export const createProduct = async (productData: CreateProductData) => {
  const res = await tenantSpecificFetch({
    url: PRODUCTS_API,
    method: "POST",
    body: productData,
  });

  return await res?.json();
};
