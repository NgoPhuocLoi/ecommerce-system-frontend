"use client";
import ColorSetting from "@/components/settings/color-setting";
import TabInputSetting from "@/components/settings/tab-input-setting";
import TabSelectionSetting from "@/components/settings/tab-selection-setting";
import { useSetting } from "@/hooks/useSetting";
import React, { useMemo } from "react";
import { Element } from "@craftjs/core";
import { v4 } from "uuid";

interface ILayoutProps {
  children: React.ReactNode;
  bgColor?: string;
  flexDirection?: "row" | "column";
  padding?: string;
  margin?: string;
  gap?: number;
  cols?: number;
}

const getPaddingLikeValue = (inputValues: string) => {
  const values = inputValues
    .split(" ")
    .map((v: string) => v.substring(0, v.length - 2));

  const allValue = values.every((v: string) => v === values[0])
    ? values[0]
    : "";

  return {
    top: values[0],
    right: values[1],
    bottom: values[2],
    left: values[3],
    all: allValue,
  };
};

export const LayoutSetting = () => {
  const { props, handlePropChange } = useSetting();
  const { bgColor, gap, cols, padding, margin } = props;
  const paddingValues = useMemo(() => getPaddingLikeValue(padding), [padding]);
  const marginValues = useMemo(() => getPaddingLikeValue(margin), [margin]);
  return (
    <div className="flex flex-col gap-4">
      <TabSelectionSetting
        id="shop-common-layout"
        title="Columns"
        description="Config the number of columns for layout"
        value={cols.toString()}
        selections={[
          { title: "1", value: "1" },
          { title: "2", value: "2" },
          { title: "3", value: "3" },
          { title: "4", value: "4" },
          { title: "5", value: "5" },
          { title: "6", value: "6" },
        ]}
        onValueChange={(value) => {
          console.log({ value });
          handlePropChange("cols", value);
        }}
      />

      <TabInputSetting
        values={[
          { title: "Top", value: "top" },
          { title: "Right", value: "right" },
          { title: "Bottom", value: "bottom" },
          { title: "Left", value: "left" },
          { title: "All", value: "all" },
        ]}
        onValueChange={(value) => {
          let padding = "";

          if (value.isAllChanged === "true") {
            padding = `${value.all}px ${value.all}px ${value.all}px ${value.all}px`;
          } else {
            padding = Object.values(value)
              .slice(0, 4)
              .map((v) => (v ? `${v}px` : ""))
              .join(" ");
          }

          handlePropChange("padding", padding);
        }}
        id={"shop-common-layout-padding"}
        title={"Padding"}
        value={paddingValues}
        description={"Change the padding of layout"}
      />

      <TabInputSetting
        values={[
          { title: "Top", value: "top" },
          { title: "Right", value: "right" },
          { title: "Bottom", value: "bottom" },
          { title: "Left", value: "left" },
          { title: "All", value: "all" },
        ]}
        onValueChange={(value) => {
          let margin = "";

          if (value.isAllChanged === "true") {
            margin = `${value.all}px ${value.all}px ${value.all}px ${value.all}px`;
          } else {
            margin = Object.values(value)
              .slice(0, 4)
              .map((v) => (v ? `${v}px` : ""))
              .join(" ");
          }

          handlePropChange("margin", margin);
        }}
        id={"shop-common-layout-margin"}
        title={"Margin"}
        value={marginValues}
        description={"Change the margin of layout"}
      />

      <ColorSetting
        value={bgColor}
        onChange={(value) => handlePropChange("bgColor", value)}
        id={"shop-common-layout-bgColor"}
        title={"Background color"}
        description={"Change the background color of layout"}
      />
    </div>
  );
};

export const Layout = ({
  children,
  bgColor = "#aaa",
  flexDirection = "row",
  padding,
  margin,
  gap = 8,
  cols = 2,
}: ILayoutProps) => {
  return (
    <div
      className={`grid h-[100px] w-full grid-cols-2 rounded-md`}
      style={{
        backgroundColor: bgColor,
        gap: `${gap}px`,
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        padding,
        margin,
      }}
    >
      {Array.from({ length: cols }).map((_, i) => (
        <Element
          key={_}
          canvas
          is="div"
          id={`layout-${v4()}`}
          className="flex h-full items-center justify-center border border-dashed text-sm text-gray-600 hover:outline hover:outline-red-400"
        >
          Drop other component here
        </Element>
      ))}
    </div>
  );
};

Layout.craft = {
  props: {
    bgColor: "#aaa",
    gap: 8,
    cols: 2,
    margin: "0px 0px 0px 0px",
    padding: "8px 8px 8px 8px",
  },
  related: {
    setting: LayoutSetting,
  },
};
