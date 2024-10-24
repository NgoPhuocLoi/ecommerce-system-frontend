"use client";

import { getPageLayout } from "@/actions/online-shop";
import { getPageDetailInTheme } from "@/actions/themes";
import { ShopHeader } from "@/components/editable/theme-2";
import { ShopFooter } from "@/components/editable/theme-2/shop-footer";
import { Layout, PlaceholderContainer } from "@/components/editable/v2";
import { Element, Frame, useEditor } from "@craftjs/core";
import clsx from "clsx";
import { useAtom } from "jotai";
import lz from "lz-string";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DefaultLayoutRenderer from "../../admin-builder/_components/top-layout-editor";
import { selectedPageAtom } from "../_atoms/page-atom";
import SettingPanel from "./setting-panel";
import Toolbox from "./toolbox";

interface IShopHeaderProps {
  isAdminBuilder?: boolean;
  defaultHeaderLayout?: string;
  defaultFooterLayout?: string;
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const RenderEditor = ({
  isAdminBuilder,
  loading,
  jsonLayout,
}: {
  isAdminBuilder?: boolean;
  loading: boolean;
  jsonLayout: string;
}) => {
  const { actions } = useEditor();

  useEffect(() => {
    if (jsonLayout) {
      console.log({ jsonLayout });
      // actions.deserialize(jsonLayout);
    }
  }, [jsonLayout]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAdminBuilder) {
    return jsonLayout ? (
      <>
        <Frame data={jsonLayout}></Frame>
      </>
    ) : (
      <Frame>
        <Element id="div" is={PlaceholderContainer} canvas></Element>
      </Frame>
    );
  }

  return jsonLayout ? (
    <Frame data={jsonLayout}>
      <Element is="div" id="container" canvas></Element>
    </Frame>
  ) : (
    <Frame>
      <Element is="div" id="container" canvas>
        <ShopHeader />
        <Element is={Layout} canvas></Element>
        <ShopFooter />
      </Element>
    </Frame>
  );
};

export const DEFAULT_LAYOUT = "defaultLayout";

const EditorBody = ({
  isAdminBuilder,
  defaultHeaderLayout,
  defaultFooterLayout,
}: IShopHeaderProps) => {
  const [json, setJson] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedPage] = useAtom(selectedPageAtom);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchPageLayout = async () => {
      const pageId = searchParams.get("pageId") as string;
      const themeId = searchParams.get("themeId") as string;
      setLoading(true);
      console.log("RUNNNN", { pageId, themeId, selectedPage });
      if (!selectedPage && pageId !== DEFAULT_LAYOUT) {
        console.log("TERMINATE");
        setLoading(false);
        return;
      }

      if (pageId === DEFAULT_LAYOUT) {
        // setJson(lz.decompressFromBase64( ?? ""));
        setJson("");
        console.log("DEFAULT LAYOUT");
        setLoading(false);
        return;
      }

      let res;
      console.log("FETCHING PAGE LAYOUT", selectedPage);
      if (isAdminBuilder && selectedPage) {
        res = await getPageDetailInTheme(themeId, selectedPage.id.toString());
      } else {
        res = await getPageLayout(selectedPage!.id);
      }
      console.log({ res });
      if (!res.layout) {
        console.log("RUN LAYOUT HERE");
        setJson(lz.decompressFromBase64(""));
        setLoading(false);
        return;
      }

      console.log("RUN LAYOUT HERE AAA", res.layout);
      const decompressedLayout = lz.decompressFromBase64(res.layout);
      setJson(decompressedLayout);

      setLoading(false);
    };

    fetchPageLayout();
  }, [selectedPage, searchParams]);

  return (
    <div
      className={clsx("page-container m-2 mt-8 h-full flex-1 bg-white", {
        "max-w-[calc(100%-280px)]": enabled,
        "max-w-full": !enabled,
      })}
    >
      <DefaultLayoutRenderer defaultLayout={defaultHeaderLayout} />
      <RenderEditor
        isAdminBuilder={isAdminBuilder}
        loading={loading}
        jsonLayout={json}
      />
      <DefaultLayoutRenderer defaultLayout={defaultFooterLayout} />

      {enabled && (
        <>
          <Toolbox />
          <SettingPanel />
        </>
      )}
    </div>
  );
};

export default EditorBody;
