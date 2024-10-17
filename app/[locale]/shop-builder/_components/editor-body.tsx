"use client";

import { Element, Frame, useEditor } from "@craftjs/core";
import clsx from "clsx";
import lz from "lz-string";
import { useEffect, useState } from "react";
import SettingPanel from "./setting-panel";
import Toolbox from "./toolbox";
import { useAtom } from "jotai";
import { pagesAtom, selectedPageAtom } from "../_atoms/page-atom";
import { getPageLayout } from "@/actions/online-shop";
import { ShopHeader } from "@/components/editable/theme-2";
import { ShopFooter } from "@/components/editable/theme-2/shop-footer";
import { Layout, PlaceholderContainer } from "@/components/editable/v2";
import { getPageDetailInTheme } from "@/actions/themes";
import { useSearchParams } from "next/navigation";
import ViewPort from "./view-port";
import { useApplyRef } from "@/hooks/useApplyRef";

const defaultLayout =
  "N4IgSg8hAqIFygC4E8AOBTeIAmBLAbiADQi4DOAwgIYB2+VZ8iATgK7omrMD2qjCpbFgDG3Goiq4a6ZiAC+JPGVQAbKsgByVALaY4OAsRDDWZRN23xgCkAAtc2bOhrwAZlRVkOIGtyf8AbRAALQBlUIBHXGQANQANVAAjIwj0AHENDBiAWgAJAAYjABEaAFUAaSpQ4QB3XHKQAF0SFSkAa3RsDT90fmsbVIysvMKBFAwrEGZe7hV8Tq1dLABBGl9WGmF0XXEAISpZG3JqOgY3Dy9OHj5J1zFEUNwALz0ARgA2EkR0AA9ELAA6ugVKJdAACcxg7TIMFmbjTeSKciqdSLPQgVbrTbbZyIfayEgmOGWBA2VAHXFYSAwIz2RzOc6eby+fzwALNECtGgdLo9PpyGxhSLReJJSbjPSgaZkWbzLo6dGhczTXLoKhOQ4kY60ej8dxMq68flI5RqTQKrBK+HoVXqmRGInmEnWTgU8RUqCwEh0pwuOD6y4+PlsjlcnndVmkmwlCpVWr1cVoSVTGZzBYW/QASW0VAA5uh9mt7UdKDqzv6Lt4uEarDYlCjzUsszn84XpATjKYnbXXdN3fpqV67A5fYzAyzeiGWu0FsGo3IgA";

interface IShopHeaderProps {
  isAdminBuilder?: boolean;
  defaultLayout?: string;
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const RenderEditor = ({
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
      actions.deserialize(jsonLayout);
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

const EditorBody = ({ isAdminBuilder, defaultLayout }: IShopHeaderProps) => {
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
        setJson(lz.decompressFromBase64(defaultLayout ?? ""));
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
        setJson(lz.decompressFromBase64(defaultLayout ?? ""));
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
      <RenderEditor
        isAdminBuilder={isAdminBuilder}
        loading={loading}
        jsonLayout={json}
      />

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
