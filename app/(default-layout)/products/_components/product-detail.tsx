import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ServerTextField from "@/components/ui/server-text-field";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <Card x-chunk="dashboard-07-chunk-0">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <ServerTextField
                name={"name"}
                label={"Name"}
                id={"add-product-name"}
                type={"text"}
                placeholder="Enter product name"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                className="min-h-32"
                placeholder="Enter product description"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;
