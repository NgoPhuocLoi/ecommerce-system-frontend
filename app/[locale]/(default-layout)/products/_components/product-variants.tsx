import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import ProductVariantList from "./product-variant-list";
import { Attribute } from "@/app/interfaces/category";
import { VariantResponse } from "@/app/interfaces/product";
import { useTranslations } from "next-intl";

interface IProductVariantsProps {
  initialVariants?: VariantResponse[];
  initialAttributes?: Attribute[];
}

const ProductVariants = ({
  initialVariants,
  initialAttributes,
}: IProductVariantsProps) => {
  const t = useTranslations("ProductDetailAndAddPage");
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{t("productVariants.title")}</CardTitle>
          <CardDescription>{t("productVariants.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductVariantList initialAttributes={initialAttributes} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductVariants;
