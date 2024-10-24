"use client";

import { Page } from "@/app/interfaces/online-shop";
import { Product } from "@/app/interfaces/product";
import * as theme2 from "@/components/editable/theme-2";
import * as editableComponentsV2 from "@/components/editable/v2";
import { Editor } from "@craftjs/core";
import { useHydrateAtoms } from "jotai/utils";
import RenderNode from "../../../../components/render-node";
import { pagesAtom } from "../_atoms/page-atom";
import { productsAtom } from "../_atoms/product-atom";
import EditorBody from "./editor-body";
import EditorHeader from "./editor-header";
import TopLayoutEditor from "../../admin-builder/_components/top-layout-editor";
import { useSearchParams } from "next/navigation";
import LayoutBuilder from "../../admin-builder/_components/layout-builder";

interface IShopHeaderProps {
  pages: Page[];
  products: Product[];
  returnLink?: string;
  isAdminBuilder?: boolean;
  defaultHeaderLayout?: string;
  defaultFooterLayout?: string;
  shouldDisplayLayoutEditor?: boolean;
}

const PageBuilder = ({
  pages,
  products,
  returnLink,
  isAdminBuilder,
  defaultHeaderLayout,
  defaultFooterLayout,
  shouldDisplayLayoutEditor,
}: IShopHeaderProps) => {
  useHydrateAtoms([[pagesAtom, pages]]);
  useHydrateAtoms([[productsAtom, products]]);
  console.log({ shouldDisplayLayoutEditor });
  return (
    <div className="flex w-full flex-col">
      {shouldDisplayLayoutEditor ? (
        <>
          <LayoutBuilder
            defaultFooterLayout={defaultFooterLayout}
            defaultHeaderLayout={defaultHeaderLayout}
          />
        </>
      ) : (
        <Editor
          onRender={RenderNode}
          resolver={{ ...editableComponentsV2, ...theme2 }}
        >
          <EditorHeader
            returnLink={returnLink}
            isAdminBuilder={isAdminBuilder}
          />
          <EditorBody
            defaultHeaderLayout={defaultHeaderLayout}
            defaultFooterLayout={defaultFooterLayout}
            isAdminBuilder={isAdminBuilder}
          />
        </Editor>
      )}
    </div>
  );
};

export default PageBuilder;
