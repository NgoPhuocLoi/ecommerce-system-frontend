import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServerTextField from "@/components/ui/server-text-field";

interface IProductStockProps {
  initialQuantity?: number;
}

const ProductStock = ({ initialQuantity }: IProductStockProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2 w-fit">
            <ServerTextField
              name={"availableQuantity"}
              label={"Total quantity"}
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
