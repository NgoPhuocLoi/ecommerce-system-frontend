"use client";
import { Editor, Frame, Element } from "@craftjs/core";
import React, { useEffect, useState } from "react";
import * as editableComponentsV2 from "@/components/editable/v2";
import lz from "lz-string";
import { useAtom } from "jotai";
import { productsAtom } from "../_atoms/product-atom";
import { getProducts } from "@/actions/product";
import * as theme2 from "@/components/editable/theme-2";
import { Page } from "@/app/interfaces/online-shop";
import { Product } from "@/app/interfaces/product";
import { useHydrateAtoms } from "jotai/utils";
import { pagesAtom, selectedPageAtom } from "../_atoms/page-atom";
import DefaultLayoutRenderer from "../../admin-builder/_components/top-layout-editor";
import EditorBody, { RenderEditor } from "./editor-body";
import { useSearchParams } from "next/navigation";

interface IPageViewProps {
  pages: Page[];
  products: Product[];
  isAdminBuilder?: boolean;
  defaultHeaderLayout?: string;
  defaultFooterLayout?: string;
  shouldDisplayLayoutEditor?: boolean;
}

const PageView = ({
  pages,
  products,
  defaultFooterLayout,
  defaultHeaderLayout,
}: IPageViewProps) => {
  useHydrateAtoms([[pagesAtom, pages]]);
  useHydrateAtoms([[productsAtom, products]]);
  // const [json, setJson] = useState("");
  // const [loading, setLoading] = useState(false);
  const [selectedPage, setSelectedPage] = useAtom(selectedPageAtom);
  const searchParams = useSearchParams();

  useEffect(() => {
    //   setLoading(true);
    console.log({ selectedPage });
    if (!selectedPage) {
      setSelectedPage(pages[0]);
      return;
    }
    const page = pages.find(
      (p) => p.id.toString() === searchParams.get("pageId"),
    );
    console.log({ page });
    if (page) {
      setSelectedPage(page);
    }
    // const compressed = localStorage.getItem("layout");
    // const decompressed = lz.decompressFromBase64(compressed ?? "");
    // setJson(decompressed);
    // console.log({ json });
    //   setLoading(false);
  }, [searchParams.get("pageId")]);
  return (
    <div>
      <Editor enabled={false} resolver={{ ...editableComponentsV2, ...theme2 }}>
        <div className="h-full w-full flex-1 bg-white">
          {/* {json && (
            <Frame data={json}>
              <Element is="div" id="container" canvas></Element>
            </Frame>
          )} */}
          <EditorBody
            fluidContent={true}
            isAdminBuilder={false}
            defaultFooterLayout={defaultFooterLayout}
            defaultHeaderLayout={defaultHeaderLayout}
          />
        </div>
      </Editor>
    </div>
  );
};

export default PageView;
