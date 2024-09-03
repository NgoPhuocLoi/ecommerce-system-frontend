import { UPLOADED_CONTENT_API } from "@/constants";
import { tenantSpecificFetch } from "@/utils/fetch";

export const getUploadedImages = async () => {
  const res = await tenantSpecificFetch({
    url: UPLOADED_CONTENT_API,
    method: "GET",
  });

  if (!res) {
    return null;
  }

  return await res.json();
};
