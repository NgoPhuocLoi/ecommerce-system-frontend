import { getTopLevelCategories } from "@/actions/categories";
import { Category, CategoryResponse } from "@/app/interfaces/category";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CategoryList from "./category-list";
import { useTranslations } from "next-intl";

interface IProductCategoryProps {
  initialCategory?: CategoryResponse;
}

const ProductCategory = async ({ initialCategory }: IProductCategoryProps) => {
  const t = useTranslations("ProductDetailAndAddPage");
  const topLevelCategories: Category[] = (await getTopLevelCategories())
    .metadata;
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
