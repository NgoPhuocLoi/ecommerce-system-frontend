import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ServerTextField from "@/components/ui/server-text-field";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import React from "react";

interface IProductDetailsProps {
  name?: string;
  description?: string;
}

const ProductDetails = ({ name, description }: IProductDetailsProps) => {
  const t = useTranslations("ProductDetailAndAddPage");
  return (
    <div>
      <Card x-chunk="dashboard-07-chunk-0">
        <CardHeader>
          <CardTitle>{t("productDetail.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <ServerTextField
                name={"name"}
                label={t("productDetail.nameInput.label")}
                id={"add-product-name"}
                type={"text"}
                placeholder={t("productDetail.nameInput.placeholder")}
                defaultValue={name ?? ""}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">
                {t("productDetail.descriptionInput.label")}
              </Label>
              <Textarea
                id="description"
                name="description"
                className="min-h-32"
                placeholder={t("productDetail.descriptionInput.placeholder")}
                defaultValue={description ?? ""}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;
