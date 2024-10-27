import { getTopLevelCategories } from "@/actions/categories";
import { Category, CategoryResponse } from "@/app/interfaces/category";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTranslations } from "next-intl/server";
import CategoryList from "./category-list";

interface IProductCategoryProps {
  initialCategory?: CategoryResponse;
}

const ProductCategory = async ({ initialCategory }: IProductCategoryProps) => {
  const t = await getTranslations("ProductDetailAndAddPage");
  const topLevelCategories: Category[] = await getTopLevelCategories();
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{t("productCategory.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <CategoryList
              topLevelCategories={topLevelCategories}
              initialCategory={initialCategory}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCategory;
