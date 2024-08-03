import React from "react";
import { FeaturedCollection, ImageBanner } from "../_components";

const Page = ({ params }: { params: { storeId: string } }) => {
  const storeId = params.storeId;
  return (
    <>
      <ImageBanner />

      <FeaturedCollection />
    </>
  );
};

export default Page;
