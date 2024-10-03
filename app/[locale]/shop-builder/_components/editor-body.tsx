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
import { Layout } from "@/components/editable/v2";

const defaultLayout =
  "N4IgSg8hAqIFygC4E8AOBTeIAmBLAbiADQi4DOAwgIYB2+VZ8iATgK7omrMD2qjCpbFgDG3Goiq4a6ZiAC+JPGVQAbKsgByVALaY4OAsRDDWZRN23xgCkAAtc2bOhrwAZlRVkOIGtyf8AbRAALQBlUIBHXGQANQANVAAjIwj0AHENDBiAWgAJAAYjABEaAFUAaSpQ4QB3XHKQAF0SFSkAa3RsDT90fmsbVIysvMKBFAwrEGZe7hV8Tq1dLABBGl9WGmF0XXEAISpZG3JqOgY3Dy9OHj5J1zFEUNwALz0ARgA2EkR0AA9ELAA6ugVKJdAACcxg7TIMFmbjTeSKciqdSLPQgVbrTbbZyIfayEgmOGWBA2VAHXFYSAwIz2RzOc6eby+fzwALNECtGgdLo9PpyGxhSLReJJSbjPSgaZkWbzLo6dGhczTXLoKhOQ4kY60ej8dxMq68flI5RqTQKrBK+HoVXqmRGInmEnWTgU8RUqCwEh0pwuOD6y4+PlsjlcnndVmkmwlCpVWr1cVoSVTGZzBYW/QASW0VAA5uh9mt7UdKDqzv6Lt4uEarDYlCjzUsszn84XpATjKYnbXXdN3fpqV67A5fYzAyzeiGWu0FsGo3IgA";

const EditorBody = () => {
  const [json, setJson] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedPage] = useAtom(selectedPageAtom);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  useEffect(() => {
    const fetchPageLayout = async () => {
      setLoading(true);
      if (!selectedPage) return;
      console.log("FETCH LAYOUT");
      const res = await getPageLayout(selectedPage.id);
      if (!res.metadata.layout) {
        setJson("");
        setLoading(false);
        return;
      }
      const decompressedLayout = lz.decompressFromBase64(res.metadata.layout);
      setJson(decompressedLayout);

      setLoading(false);
    };

    fetchPageLayout();
  }, [selectedPage]);

  return (
    <div
      className={clsx("m-2 h-full flex-1 bg-white", {
        "max-w-[calc(100%-280px)]": enabled,
        "max-w-full": !enabled,
      })}
    >
      {loading ? (
        <>
          <div>Loading...</div>
        </>
      ) : json ? (
        <>
          <Frame data={json}>
            <Element is="div" id="container" canvas></Element>
          </Frame>
        </>
      ) : (
        <Frame>
          <Element is="div" id="container" canvas>
            <ShopHeader />
            <Element is={Layout} canvas></Element>
            <ShopFooter />
          </Element>
        </Frame>
      )}

      {/* <Frame>
            <Element is="div" id="container" canvas>
              <ShopHeader />
            </Element>
          </Frame> */}
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
