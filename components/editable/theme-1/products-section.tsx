import ProductCard from "@/app/shop/_components/product-card";
import { InputSetting } from "@/components/settings";
import { Button } from "@/components/ui/button";
import { useApplyRef } from "@/hooks/useApplyRef";
import { useSetting } from "@/hooks/useSetting";
import React from "react";

const ProductsSectionSetting = () => {
  const {
    props: { title },
    handlePropChange,
  } = useSetting();
  return (
    <div className="flex flex-col gap-5 pt-1">
      <InputSetting
        onChange={(value) => {
          handlePropChange("title", value);
        }}
        id="products-section-title"
        title="Title"
        description="Change Title"
        value={title}
      />
      {/* <MultiSelectionSetting
        id="image-banner-image-size"
        title="Banner height"
        description="Change the banner height. For best results, use an image with a 3:2 aspect ratio"
        value={bannerHeight}
        onValueChange={(value) => {
          handlePropChange("bannerHeight", value);
        }}
        selections={bannerHeightSelections}
      /> */}
    </div>
  );
};

interface IProductsSectionProps {
  title: string;
}

export const ProductsSection = ({ title }: IProductsSectionProps) => {
  return (
    <div className="mt-10 border-b px-10 pb-9">
      <h1 className="mb-8 text-2xl font-bold">{title}</h1>

      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <ProductCard key={i} />
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <Button>View all</Button>
      </div>
    </div>
  );
};

ProductsSection.craft = {
  props: {
    title: "Featured Products",
  },
  related: {
    setting: ProductsSectionSetting,
  },
};
