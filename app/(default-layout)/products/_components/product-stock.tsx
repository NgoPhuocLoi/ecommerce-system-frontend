import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ServerTextField from "@/components/ui/server-text-field";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PlusCircle } from "lucide-react";

const ProductStock = () => {
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
              defaultValue={0}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductStock;
