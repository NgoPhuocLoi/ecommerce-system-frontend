import { useApplyRef } from "@/hooks/useApplyRef";
import { Resizable } from "re-resizable";
import React, { ReactNode } from "react";

interface IGridContainerProps {
  children: ReactNode;
}

const GridContainer = ({ children }: IGridContainerProps) => {
  return (
    <Resizable
      handleComponent={{
        right: <div></div>,
      }}
    >
      <div className="grid grid-cols-12 gap-2 h-[100px] w-full bg-blue-200">
        {children}
      </div>
    </Resizable>
  );
};

export default GridContainer;
