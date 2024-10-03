"use client";

import * as theme2 from "@/components/editable/theme-2";
import * as editableComponentsV2 from "@/components/editable/v2";
import { useApplyRef } from "@/hooks/useApplyRef";
import { Editor } from "@craftjs/core";
import clsx from "clsx";
import { useHydrateAtoms } from "jotai/utils";
import { ReactElement, useEffect } from "react";
import { pagesAtom } from "../_atoms/page-atom";
import EditorHeader from "./editor-header";
import EditorBody from "./editor-body";
import { Product } from "@/app/interfaces/product";
import { productsAtom } from "../_atoms/product-atom";
import { useAtom } from "jotai";
import { Page } from "@/app/interfaces/online-shop";

const RenderNode = ({ render }: { render: ReactElement }) => {
  const { isActive, applyRef, isHover, editable } = useApplyRef();
  console.log(editable);
  return (
    <div
      ref={applyRef}
      className={clsx("w-full border border-dashed", {
        "outline outline-blue-400": editable && isActive,
        "cursor-pointer border-blue-500": editable && isHover && !isActive,
        "border-transparent": editable && !isHover,
      })}
    >
      {render}
    </div>
  );
};

interface IShopHeaderProps {
  pages: Page[];
  products: Product[];
}

const PageBuilder = ({ pages, products }: IShopHeaderProps) => {
  useHydrateAtoms([[pagesAtom, pages]]);
  useHydrateAtoms([[productsAtom, products]]);
  return (
    <div className="flex w-full flex-col bg-gray-200">
      <Editor
        onRender={RenderNode}
        resolver={{ ...editableComponentsV2, ...theme2 }}
      >
        <EditorHeader />
        <EditorBody />
      </Editor>
    </div>
  );
};

export default PageBuilder;
