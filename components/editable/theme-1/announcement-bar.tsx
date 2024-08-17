import { useApplyRef } from "@/hooks/useApplyRef";
import React, { useRef } from "react";
import Text from "../text";
import ContentEditable from "react-contenteditable";
import clsx from "clsx";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useNode } from "@craftjs/core";
import { Input } from "@/components/ui/input";

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
    console.log({ data: node.data });
    return { fontSize: node.data.props.fontSize, text: node.data.props.text };
  });
  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="temperature">Font size</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {fontSize}
              </span>
            </div>
            <Slider
              id="temperature"
              max={100}
              defaultValue={[fontSize]}
              step={1}
              onValueChange={(values) =>
                setProp((props: any) => (props.fontSize = values[0]))
              }
              className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              aria-label="Temperature"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          Controls randomness: lowering results in less random completions. As
          the temperature approaches zero, the model will become deterministic
          and repetitive.
        </HoverCardContent>
      </HoverCard>

      <Input
        value={text}
        onChange={(e) => {
          setProp((props: any) => {
            props.text = e.target.value;
          });
        }}
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
