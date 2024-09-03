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

const ProductImages = async () => {
  const session = await auth();
  if (!session || !session.selectedShopId) return null;
  return (
    <div>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Product Images</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProductImageList shopId={session.selectedShopId} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductImages;
