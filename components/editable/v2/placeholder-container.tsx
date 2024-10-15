"use client";

import { useApplyRef } from "@/hooks/useApplyRef";
import { ReactNode } from "react";

export const PlaceholderContainer = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const { applyRef } = useApplyRef();
  return (
    <div ref={applyRef} className="min-h-6">
      {children}
    </div>
  );
};
