import ColorSetting from "@/components/settings/color-setting";
import TabInputSetting from "@/components/settings/tab-input-setting";
import TabSelectionSetting from "@/components/settings/tab-selection-setting";
import { useSetting } from "@/hooks/useSetting";
import { getPaddingLikeValue } from "@/utils/component-setting";
import { Element } from "@craftjs/core";
import React, { ReactNode, useEffect, useMemo, useRef } from "react";
import { v4 } from "uuid";
import { icons } from "@/public/icons";
import Image from "next/image";

interface IProductProps {
  bgColor?: string;
  padding?: string;
  margin?: string;
  contentAlign?: "flex-start" | "center" | "flex-end";
}

export const ProductSetting = () => {
  const { props, handlePropChange } = useSetting();
  const { bgColor, padding, margin } = props;
  const paddingValues = useMemo(() => getPaddingLikeValue(padding), [padding]);
  const marginValues = useMemo(() => getPaddingLikeValue(margin), [margin]);
  return (
    <div className="flex flex-col gap-4">
      <div>Setting</div>
    </div>
  );
};

export const Product = ({
  bgColor,
  padding,
  margin,
  contentAlign,
}: IProductProps) => {
  return (
    <div>
      <div className="p-2">
        <div className="flex items-center justify-center bg-[#D9DCE9]">
          <Image
            src={icons.productPlaceholder}
            width={255}
            height={255}
            alt="product"
          />
        </div>
      </div>

      <div className="text-center text-sm text-gray-600">
        <p>BRAND</p>
        <p>Product title</p>
        <p className="mt-2">300.000 vnd</p>
      </div>
    </div>
  );
};

Product.craft = {
  props: {
    bgColor: "#aaa",
    margin: "0px 0px 0px 0px",
    padding: "8px 8px 8px 8px",
    contentAlign: "center",
  },
  related: {
    setting: ProductSetting,
  },
  data: {
    name: "Product",
  },
};
