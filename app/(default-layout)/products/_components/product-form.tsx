import { createProduct } from "@/actions/product";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import ProductCategory from "./product-category";
import ProductDetails from "./product-detail";
import ProductImages from "./product-images";
import ProductPricing from "./product-pricing";
import ProductStatus from "./product-status";
import ProductStock from "./product-stock";
import { UploadedContentPreview } from "./product-image-list";
import ProductVariants from "./product-variants";

interface IProductFormProps {
  title: string;
  badgeLabel?: string;
}

const ProductForm = ({ badgeLabel, title }: IProductFormProps) => {
  const handleCreateNewProduct = async (formData: FormData) => {
    "use server";
    console.log(formData);
    const images = JSON.parse(formData.get("productImages") as string) ?? [];
    console.log({ images });
    await createProduct({
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      compareAtPrice: Number(formData.get("compareAtPrice")),
      cost: Number(formData.get("cost")),
      isActive: formData.get("isActive") === "true",
      categoryId: Number(formData.get("categoryId")),
      availableQuantity: Number(formData.get("availableQuantity")),
      uploadedImages: images,
    });

    revalidatePath("/products");
    redirect("/products/");
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            {title}
          </h1>
          {badgeLabel && (
            <Badge variant="outline" className="ml-auto sm:ml-0">
              {badgeLabel}
            </Badge>
          )}
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Save Product</Button>
          </div>
        </div>
        <form action={handleCreateNewProduct}>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <ProductDetails />
              <ProductCategory />
              <ProductPricing />
              <ProductVariants />
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <ProductStatus />
              <ProductStock />
              <ProductImages />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit">Save</Button>
          </div>
        </form>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Product</Button>
        </div>
      </div>
    </main>
  );
};

export default ProductForm;
