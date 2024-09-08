"use client";
import TextField from "@/app/auth/_components/text-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ServerTextField from "@/components/ui/server-text-field";
import { PlusCircle } from "lucide-react";
import React, { useMemo } from "react";

const ProductPricing = () => {
  const [productPricing, setProductPricing] = React.useState<{
    price?: number;
    compareAtPrice?: number;
    cost?: number;
  }>({
    price: undefined,
    compareAtPrice: undefined,
    cost: undefined,
  });

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
          <CardTitle>Pricing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex w-full gap-4">
            <TextField
              name={"price"}
              label={"Price"}
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
              label={"Compare at price"}
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
              label={"Cost per item"}
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
              label={"Profit"}
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
