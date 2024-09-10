import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServerTextField from "@/components/ui/server-text-field";
import { useTranslations } from "next-intl";

interface IProductStockProps {
  initialQuantity?: number;
}

const ProductStock = ({ initialQuantity }: IProductStockProps) => {
  const t = useTranslations("ProductDetailAndAddPage");
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{t("productStock.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2 w-fit">
            <ServerTextField
              name={"availableQuantity"}
              label={t("productStock.stockInput.label")}
              id={"add-product-availableQuantity"}
              type={"number"}
              defaultValue={initialQuantity ?? 0}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductStock;
