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
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="grid gap-3">
              <ServerTextField
                name={"categoryId"}
                label={"Category Id"}
                id={"category-idd"}
                type={"number"}
              />
            </div>
            <CategoryList topLevelCategories={topLevelCategories} />
            <div className="grid gap-3">
              <Label htmlFor="subcategory">Subcategory (optional)</Label>
              <Select>
                <SelectTrigger id="subcategory" aria-label="Select subcategory">
                  <SelectValue placeholder="Select subcategory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="t-shirts">T-Shirts</SelectItem>
                  <SelectItem value="hoodies">Hoodies</SelectItem>
                  <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCategory;
