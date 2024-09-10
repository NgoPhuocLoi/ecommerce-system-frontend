import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import React from "react";

interface IProductStatusProps {
  initialStatus?: boolean;
}

const ProductStatus = ({ initialStatus }: IProductStatusProps) => {
  const t = useTranslations("ProductDetailAndAddPage");
  return (
    <div>
      <Card x-chunk="dashboard-07-chunk-3">
        <CardHeader>
          <CardTitle>{t("productStatus.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="status">
                {t("productStatus.statusInput.label")}
              </Label>
              <Select
                defaultValue={initialStatus === true ? "true" : "false"}
                name="isActive"
              >
                <SelectTrigger id="status" aria-label="Select status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="false">
                    {t("productStatus.statusInput.options.draft")}
                  </SelectItem>
                  <SelectItem value="true">
                    {t("productStatus.statusInput.options.active")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductStatus;
