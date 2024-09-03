import { getTopLevelCategories } from "@/actions/categories";
import { Category } from "@/app/interfaces/category";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ServerTextField from "@/components/ui/server-text-field";
import { CATEGORIES_API } from "@/constants";
import CategoryList from "./category-list";

const ProductCategory = async () => {
  const topLevelCategories: Category[] = (await getTopLevelCategories())
    .metadata;
  console.log({ topLevelCategories });
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Product Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <CategoryList topLevelCategories={topLevelCategories} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCategory;
