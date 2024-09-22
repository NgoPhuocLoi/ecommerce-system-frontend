"use client";
import { InputSetting, SliderSetting } from "@/components/settings";
import ColorSetting from "@/components/settings/color-setting";
import InlineInputSetting from "@/components/settings/inline-input-setting";
import TabInputSetting from "@/components/settings/tab-input-setting";
import TabSelectionSetting from "@/components/settings/tab-selection-setting";
import { useSetting } from "@/hooks/useSetting";
import React, { useMemo } from "react";

interface ITextProps {
  bgColor?: string;
  padding?: string;
  margin?: string;
  content?: string;
  textAlign?: "left" | "center" | "right";
  textColor?: string;
  fontWeight?: "300" | "400" | "700";
  fontSize?: number;
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

export const TextSetting = () => {
  const { props, handlePropChange } = useSetting();
  const {
    bgColor,
    padding,
    margin,
    textAlign,
    content,
    textColor,
    fontWeight,
    fontSize,
  } = props;
  const paddingValues = useMemo(() => getPaddingLikeValue(padding), [padding]);
  const marginValues = useMemo(() => getPaddingLikeValue(margin), [margin]);
  return (
    <div className="flex flex-col gap-4">
      <InputSetting
        id="shop-common-text-content"
        title="Content"
        value={content}
        onChange={(value) => {
          handlePropChange("content", value);
        }}
        description="Change the text content"
      />
      <TabSelectionSetting
        id="shop-common-text"
        title="Alignment"
        description="Config the alignment of the text"
        value={textAlign}
        selections={[
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ]}
        onValueChange={(value) => {
          console.log({ value });
          handlePropChange("textAlign", value);
        }}
      />

      <TabSelectionSetting
        id="shop-common-text-font-weight"
        title="Font weight"
        description="Config the font weight of the text"
        value={fontWeight}
        selections={[
          { title: "Light", value: "300" },
          { title: "Medium", value: "400" },
          { title: "Bold", value: "700" },
        ]}
        onValueChange={(value) => {
          console.log({ value });
          handlePropChange("fontWeight", value);
        }}
      />

      <InlineInputSetting
        onValueChange={(value) => {
          console.log("RUN HERE");
          handlePropChange("fontSize", value);
        }}
        value={fontSize}
        id={"shop-common-text-font-size"}
        title={"Font size"}
        description={"Change the font size of text"}
        postfixText="px"
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
        description={"Change the background color of text"}
      />

      <ColorSetting
        value={textColor}
        onChange={(value) => handlePropChange("textColor", value)}
        id={"shop-common-layout-textColor"}
        title={"Text color"}
        description={"Change the text color"}
      />
    </div>
  );
};

export const Text = ({
  bgColor = "#aaa",
  padding,
  margin,
  content,
  textAlign,
  textColor,
  fontWeight,
  fontSize,
}: ITextProps) => {
  return (
    <div
      className={`w-full`}
      style={{
        backgroundColor: bgColor,
        padding,
        margin,
        textAlign,
        color: textColor,
      }}
    >
      <p
        style={{
          fontWeight: fontWeight,
          fontSize: fontSize + "px",
        }}
      >
        {content}
      </p>
    </div>
  );
};

Text.craft = {
  props: {
    bgColor: "#ffffff",
    gap: 8,
    cols: 2,
    margin: "0px 0px 0px 0px",
    padding: "8px 8px 8px 8px",
    content: "You can edit this text",
    textAlign: "center",
    textColor: "#000",
    fontWeight: "400",
    fontSize: 16,
  },
  related: {
    setting: TextSetting,
  },
};
