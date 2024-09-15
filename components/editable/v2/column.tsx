import ColorSetting from "@/components/settings/color-setting";
import TabInputSetting from "@/components/settings/tab-input-setting";
import TabSelectionSetting from "@/components/settings/tab-selection-setting";
import { useSetting } from "@/hooks/useSetting";
import { getPaddingLikeValue } from "@/utils/component-setting";
import { Element } from "@craftjs/core";
import React, { ReactNode, useEffect, useMemo, useRef } from "react";
import { v4 } from "uuid";

interface IColumnProps {
  bgColor?: string;
  padding?: string;
  margin?: string;
  children: ReactNode;
  contentAlign?: "flex-start" | "center" | "flex-end";
}

export const ColumnSetting = () => {
  const { props, handlePropChange } = useSetting();
  const { bgColor, padding, margin } = props;
  const paddingValues = useMemo(() => getPaddingLikeValue(padding), [padding]);
  const marginValues = useMemo(() => getPaddingLikeValue(margin), [margin]);
  return (
    <div className="flex flex-col gap-4">
      <TabSelectionSetting
        id="shop-common-layout"
        title="Content align"
        description="Config the content align for layout"
        value={props.contentAlign}
        selections={[
          { title: "Start", value: "flex-start" },
          { title: "Center", value: "center" },
          { title: "End", value: "flex-end" },
        ]}
        onValueChange={(value) => {
          handlePropChange("contentAlign", value);
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

export const Column = ({
  bgColor,
  padding,
  margin,
  children,
  contentAlign,
}: IColumnProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const parent = (ref.current as HTMLDivElement).parentElement;
      if (parent) {
        parent.style.margin = margin as string;
      }
    }
  }, [margin]);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: bgColor,
        justifyContent: contentAlign,
        padding,
      }}
      className="flex h-full flex-col items-center justify-center border border-dashed text-sm text-gray-600 hover:outline hover:outline-green-400"
    >
      {children}
    </div>
  );
};

Column.craft = {
  props: {
    bgColor: "#aaa",
    margin: "0px 0px 0px 0px",
    padding: "8px 8px 8px 8px",
    contentAlign: "center",
  },
  related: {
    setting: ColumnSetting,
  },
  data: {
    name: "Column",
  },
};
