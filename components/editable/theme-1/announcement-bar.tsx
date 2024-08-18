import { SliderSetting, InputSetting } from "@/components/settings";
import ColorSetting from "@/components/settings/color-setting";
import { useApplyRef } from "@/hooks/useApplyRef";
import { useNode } from "@craftjs/core";
import clsx from "clsx";
import { useRef } from "react";

interface IAnnouncementBarProps {
  text: string;
  bgColor?: string;
  fontSize?: number;
  textColor?: string;
}

export const AnnouncementBarSetting = () => {
  const {
    actions: { setProp },
    fontSize,
    text,
    bgColor,
    textColor,
  } = useNode((node) => {
    return { ...node.data.props };
  });

  const handlePropChange = (key: string, value: any) => {
    setProp((prop: any) => (prop[key] = value));
  };

  return (
    <div className="flex flex-col gap-4 pt-1">
      <SliderSetting
        id="font-size"
        title="Font size"
        description="Adjust the font size"
        onValueChange={(values) => {
          handlePropChange("fontSize", values[0]);
        }}
        value={fontSize}
        range={[1, 40]}
        step={1}
      />

      <InputSetting
        id="welcome-text"
        title="Text"
        value={text}
        onChange={(value) => {
          handlePropChange("text", value);
        }}
        description="Change the text"
      />

      <ColorSetting
        id="annoucement-bg"
        title="Background"
        description="Change background color"
        value={bgColor}
        onChange={(color) => {
          handlePropChange("bgColor", color);
        }}
      />

      <ColorSetting
        id="annoucement-text-color"
        title="Text color"
        description="Change text color"
        value={textColor}
        onChange={(color) => {
          handlePropChange("textColor", color);
        }}
      />
    </div>
  );
};

export const AnnouncementBar = ({
  text,
  bgColor,
  fontSize = 16,
  textColor,
}: IAnnouncementBarProps) => {
  const content = useRef(text);
  return (
    <div
      style={{
        backgroundColor: bgColor,
        fontSize,
        color: textColor,
      }}
      className={clsx("text-center py-2 border-b text-sm flex justify-center")}
    >
      {/* <ContentEditable
        className="w-fit"
        html={content.current}
        onChange={(e) => {
          content.current = e.target.value;
        }}
      /> */}
      {text}
    </div>
  );
};

AnnouncementBar.craft = {
  props: {
    fontSize: 16,
    bgColor: "#ffffff",
    textColor: "#000000",
  },
  related: {
    setting: AnnouncementBarSetting,
  },
};
