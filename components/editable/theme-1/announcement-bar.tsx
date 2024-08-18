import { SliderSetting, InputSetting } from "@/components/settings";
import { useApplyRef } from "@/hooks/useApplyRef";
import { useNode } from "@craftjs/core";
import clsx from "clsx";
import { useRef } from "react";

interface IAnnouncementBarProps {
  text: string;
  bgColor?: string;
  fontSize?: number;
}

export const AnnouncementBarSetting = () => {
  const {
    actions: { setProp },
    fontSize,
    text,
  } = useNode((node) => {
    return { fontSize: node.data.props.fontSize, text: node.data.props.text };
  });
  return (
    <div className="flex flex-col gap-4 pt-1">
      <SliderSetting
        id="font-size"
        title="Font size"
        description="Adjust the font size"
        onValueChange={(values) => {
          setProp((prop: any) => {
            prop.fontSize = values[0];
          });
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
          setProp((prop: any) => (prop.text = value));
        }}
        description="Change the text"
      />
    </div>
  );
};

export const AnnouncementBar = ({
  text,
  bgColor = "#fff",
  fontSize = 16,
}: IAnnouncementBarProps) => {
  const { actions } = useApplyRef();
  const content = useRef(text);
  return (
    <div
      style={{
        backgroundColor: bgColor,
        fontSize,
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
  },
  related: {
    setting: AnnouncementBarSetting,
  },
};
