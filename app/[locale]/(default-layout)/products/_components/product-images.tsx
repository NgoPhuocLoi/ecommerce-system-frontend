import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import { auth } from "@/auth";
import ProductImageList from "./product-image-list";
import { PreviewUploadedContent } from "@/app/interfaces/uploaded-content";
import { useTranslations } from "next-intl";

interface IProductImagesProps {
  initialImages?: PreviewUploadedContent[];
}

const ProductImages = async ({ initialImages }: IProductImagesProps) => {
  const t = useTranslations("ProductDetailAndAddPage");
  const session = await auth();
  if (!session || !session.selectedShopId) return null;
  return (
    <div>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>{t("productImage.title")}</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProductImageList
            initialImages={initialImages}
            shopId={session.selectedShopId}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductImages;
