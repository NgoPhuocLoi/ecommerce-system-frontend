"use client";
import TextField from "@/app/[locale]/auth/_components/text-field";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import React, { useMemo } from "react";

interface IProductPricingProps {
  initialPricing?: {
    price: number;
    compareAtPrice: number;
    cost: number;
  };
}

const ProductPricing = ({ initialPricing }: IProductPricingProps) => {
  const [productPricing, setProductPricing] = React.useState<{
    price?: number;
    compareAtPrice?: number;
    cost?: number;
  }>(initialPricing ?? {});

  const t = useTranslations("ProductDetailAndAddPage");

  const profit = useMemo(() => {
    if (
      productPricing.price === undefined ||
      productPricing.cost === undefined
    ) {
      return "--";
    }
    return productPricing.price - productPricing.cost;
  }, [productPricing.price, productPricing.cost]);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{t("productPricing.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex w-full gap-4">
            <TextField
              name={"price"}
              label={t("productPricing.priceInput.label")}
              id={"add-product-price"}
              type={"number"}
              placeholder={"0"}
              value={productPricing.price}
              onChange={(value) => {
                setProductPricing({ ...productPricing, price: Number(value) });
              }}
            />
            <TextField
              name={"compareAtPrice"}
              label={t("productPricing.comparePriceInput.label")}
              id={"add-product-compareAtPrice"}
              type={"number"}
              placeholder={"0"}
              value={productPricing.compareAtPrice}
              onChange={(value) => {
                setProductPricing({
                  ...productPricing,
                  compareAtPrice: Number(value),
                });
              }}
            />
            <TextField
              name={"cost"}
              label={t("productPricing.costPerItemInput.label")}
              id={"add-product-cost"}
              type={"number"}
              placeholder={"0"}
              value={productPricing.cost}
              onChange={(value) => {
                setProductPricing({ ...productPricing, cost: Number(value) });
              }}
            />
            <TextField
              name={"profit"}
              label={t("productPricing.profitInput.label")}
              id={"add-product-profit"}
              type={"text"}
              defaultValue={"--"}
              value={profit}
              disabled={true}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductPricing;
