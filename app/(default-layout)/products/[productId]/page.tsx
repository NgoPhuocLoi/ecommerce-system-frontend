import { getProductById } from "@/actions/product";
import { Badge } from "@/components/ui/badge";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChevronLeft, PlusCircle, Upload } from "lucide-react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "@/app/interfaces/product";
import ProductForm from "../_components/product-form";

interface IProductDetailPage {
  params: {
    productId: string;
  };
}

const Page = async ({ params }: IProductDetailPage) => {
  const product: Product = (await getProductById(params.productId)).metadata;
  if (!product) {
    return redirect("/auth/login");
  }

  console.log({ product });
  return (
    <div>
      <ProductForm title="Edit product" product={product} badgeLabel={"Test"} />
    </div>
  );
};

export default Page;
