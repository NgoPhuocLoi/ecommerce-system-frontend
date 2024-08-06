"use client";
import { useApplyRef } from "@/hooks/useApplyRef";
import { useNode } from "@craftjs/core";
import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  background?: string;
  flexDirection?: "row" | "column";
}

const Container = ({
  children,
  background = "#aaa",
  flexDirection = "row",
}: IContainerProps) => {
  const applyRef = useApplyRef();
  return (
    <div
      ref={applyRef}
      className="p-4 rounded-md w-full flex gap-4"
      style={{
        backgroundColor: background,
        flexDirection,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
