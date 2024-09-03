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

export const getProductById = async (id: string) => {
  const res = await tenantSpecificFetch({
    url: `${PRODUCTS_API}/${id}`,
    method: "GET",
  });

  return await res?.json();
};
