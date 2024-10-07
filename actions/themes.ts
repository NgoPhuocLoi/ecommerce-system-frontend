"use server";

import { BACKEND_BASE_URL } from "@/constants";
import { redirect } from "@/i18n/routing";
import { authenticatedFetch, extractMetadataFromResponse } from "@/utils/fetch";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const getThemes = async () => {
  try {
    const token = await auth().getToken();
    if (!token) {
      return redirect("/sign-in");
    }
    const url = `${BACKEND_BASE_URL}/themes`;
    const res = await authenticatedFetch(url, "GET", token);
    return await extractMetadataFromResponse(res, []);
  } catch (error) {
    console.log("[Themes action]: Error when getting themes");
    return [];
  }
};

export const getTheme = async (themeId: string) => {
  try {
    const token = await auth().getToken();
    if (!token) {
      return redirect("/sign-in");
    }
    const url = `${BACKEND_BASE_URL}/themes/${themeId}`;
    const res = await authenticatedFetch(url, "GET", token);

    return await extractMetadataFromResponse(res, {});
  } catch (error) {
    console.log(`[Themes action]: Error when getting theme with id ${themeId}`);
    return null;
  }
};

export const createTheme = async ({
  name,
  description,
  recommendedForCategoryId,
}: {
  name: string;
  description: string;
  recommendedForCategoryId?: number;
}) => {
  try {
    const token = await auth().getToken();
    if (!token) {
      return redirect("/sign-in");
    }
    const url = `${BACKEND_BASE_URL}/themes`;
    const res = await authenticatedFetch(url, "POST", token, {
      name,
      description,
      recommendedForCategoryId,
    });

    return await extractMetadataFromResponse(res, {});
  } catch (error) {
    console.log(`[Themes action]: Error when creating theme`);
    return null;
  } finally {
    revalidatePath("/vi/admin/themes");
  }
};
