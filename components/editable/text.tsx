"use client";
import { useApplyRef } from "@/hooks/useApplyRef";
import { useNode } from "@craftjs/core";
import { useRef } from "react";
import ContentEditable from "react-contenteditable";

interface ITextProps {
  content: string;
  padding?: number;
}

const Text = ({ content, padding = 8 }: ITextProps) => {
  const text = useRef("");
  return (
    <ContentEditable
      html={text.current}
      onChange={(e) => {
        text.current = e.target.value;
      }}
    />
    // <div
    //   ref={applyRef}
    //   className="rounded-sm border w-fit"
    //   style={{
    //     padding: `${padding}px`,
    //   }}
    // >
    //   {content}
    // </div>
  );
};

export default Text;
