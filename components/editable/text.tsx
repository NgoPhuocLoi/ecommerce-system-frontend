"use client";
import { useApplyRef } from "@/hooks/useApplyRef";
import { useNode } from "@craftjs/core";

interface ITextProps {
  content: string;
  padding?: number;
}

const Text = ({ content, padding = 8 }: ITextProps) => {
  const applyRef = useApplyRef();
  return (
    <div
      ref={applyRef}
      className="rounded-sm border w-fit"
      style={{
        padding: `${padding}px`,
      }}
    >
      {content}
    </div>
  );
};

export default Text;
