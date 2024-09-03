import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload } from "lucide-react";
import Image from "next/image";
import React from "react";
import UploadButton from "./upload-btn";
import { auth } from "@/auth";

const ProductImages = async () => {
  const session = await auth();
  if (!session) return null;
  return (
    <div>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Product Images</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/186.png"
                width="84"
              />
            </button>
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/186.png"
                width="84"
              />
            </button>
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/186.png"
                width="84"
              />
            </button>
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/186.png"
                width="84"
              />
            </button>
            <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
              <Upload className="text-muted-foreground h-4 w-4" />
              <span className="sr-only">Upload</span>
            </button>
            <UploadButton
              folder={session.selectedShopId?.replace(/-/g, "_") ?? ""}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductImages;
