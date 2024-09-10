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

interface IProductVariantsProps {
  initialVariants?: VariantResponse[];
  initialAttributes?: Attribute[];
}

const ProductVariants = ({
  initialVariants,
  initialAttributes,
}: IProductVariantsProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>
            The maximum number of variants you can create is 3.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProductVariantList initialAttributes={initialAttributes} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductVariants;
