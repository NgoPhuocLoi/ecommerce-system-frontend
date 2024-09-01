"use server";

import { CATEGORIES_API } from "@/constants";

export const getTopLevelCategories = async () => {
  const res = await fetch(`${CATEGORIES_API}?topLevel=true`);
  return await res.json();
};

export const getSubCategories = async (parentId: number) => {
  const res = await fetch(`${CATEGORIES_API}?parentId=${parentId}`);
  return await res.json();
};
