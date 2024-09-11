import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PreviewUploadedContent } from "@/app/interfaces/uploaded-content";
import { auth } from "@/auth";
import { getTranslations } from "next-intl/server";
import ProductImageList from "./product-image-list";

interface IProductImagesProps {
  initialImages?: PreviewUploadedContent[];
}

const ProductImages = async ({ initialImages }: IProductImagesProps) => {
  const t = await getTranslations("ProductDetailAndAddPage");
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
