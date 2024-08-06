import { useApplyRef } from "@/hooks/useApplyRef";
import React from "react";

interface IAnnouncementBarProps {
  text: string;
  bgColor?: string;
}

export const AnnouncementBar = ({
  text,
  bgColor = "#fff",
}: IAnnouncementBarProps) => {
  const applyRef = useApplyRef();

  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      ref={applyRef}
      className="text-center py-2 border-b text-sm"
    >
      {text}
    </div>
  );
};
