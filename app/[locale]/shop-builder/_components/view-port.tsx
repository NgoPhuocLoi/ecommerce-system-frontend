"use client";

import { useEditor } from "@craftjs/core";
import { ReactNode } from "react";

const ViewPort = ({ children }: { children: ReactNode }) => {
  const { connectors } = useEditor();
  return (
    <div ref={(ref) => connectors.select(connectors.hover(ref!, ""), "")}>
      {children}
    </div>
  );
};

export default ViewPort;
