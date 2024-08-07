"use client";
import { useApplyRef } from "@/hooks/useApplyRef";
import { useNode } from "@craftjs/core";
import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  background?: string;
  flexDirection?: "row" | "column";
  padding?: number;
  margin?: number;
  gap?: number;
}

const Container = ({
  children,
  background = "#aaa",
  flexDirection = "row",
  padding = 0,
  margin = 0,
  gap = 0,
}: IContainerProps) => {
  const { applyRef } = useApplyRef();
  return (
    <div
      ref={applyRef}
      className="p-4 rounded-md w-full flex h-screen"
      style={{
        backgroundColor: background,
        flexDirection,
        padding,
        margin,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
