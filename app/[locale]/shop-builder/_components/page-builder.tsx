"use client";

import * as editableComponentsV2 from "@/components/editable/v2";
import { useApplyRef } from "@/hooks/useApplyRef";
import { Editor, Element, Frame, useEditor } from "@craftjs/core";
import clsx from "clsx";
import { ReactElement, useEffect, useState } from "react";
import EditorHeader from "./editor-header";

import Toolbox from "./toolbox";
import SettingPanel from "./setting-panel";

const { Layout, Column, Text, HeroBanner, Image } = editableComponentsV2;

const defaultLayout =
  "N4IgSg8hAqIFygC4E8AOBTeIAmBLAbiADQi4DOAwgIYB2+VZ8iATgK7omrMD2qjCpbFgDG3Goiq4a6ZiAC+JPGVQAbKsgByVALaY4OAsRDDWZRN23xgCkAAtc2bOhrwAZlRVkOIGtyf8AbRAALQBlUIBHXGQANQANVAAjIwj0AHENDBiAWgAJAAYjABEaAFUAaSpQ4QB3XHKQAF0SFSkAa3RsDT90fmsbVIysvMKBFAwrEGZe7hV8Tq1dLABBGl9WGmF0XXEAISpZG3JqOgY3Dy9OHj5J1zFEUNwALz0ARgA2EkR0AA9ELAA6ugVKJdAACcxg7TIMFmbjTeSKciqdSLPQgVbrTbbZyIfayEgmOGWBA2VAHXFYSAwIz2RzOc6eby+fzwALNECtGgdLo9PpyGxhSLReJJSbjPSgaZkWbzLo6dGhczTXLoKhOQ4kY60ej8dxMq68flI5RqTQKrBK+HoVXqmRGInmEnWTgU8RUqCwEh0pwuOD6y4+PlsjlcnndVmkmwlCpVWr1cVoSVTGZzBYW/QASW0VAA5uh9mt7UdKDqzv6Lt4uEarDYlCjzUsszn84XpATjKYnbXXdN3fpqV67A5fYzAyzeiGWu0FsGo3IgA";

const RenderNode = ({ render }: { render: ReactElement }) => {
  const { isActive, applyRef } = useApplyRef();
  return (
    <div
      ref={applyRef}
      className={clsx(
        "w-full cursor-pointer border border-dashed border-transparent",
        {
          "outline outline-blue-400": isActive,
          "hover:border-blue-500": !isActive,
        },
      )}
    >
      {render}
    </div>
  );
};

const PageBuilder = () => {
  const [json, setJson] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    // const compressed = localStorage.getItem("layout");
    // const decompressed = lz.decompressFromBase64(compressed ?? defaultLayout);
    // setJson(decompressed);
    // console.log({ json });
    // setLoading(false);
  }, [json]);
  return (
    <div className="flex w-full flex-col bg-gray-200">
      <Editor onRender={RenderNode} resolver={{ ...editableComponentsV2 }}>
        <EditorHeader />
        {/* <Toolbox /> */}
        <div className="flex h-full min-h-screen gap-2 rounded-md">
          {/* {!loading && json && (
            <Frame data={json}>
              <Element is="div" id="container" canvas></Element>
            </Frame>
          )} */}

          <div className="m-2 h-full max-w-[calc(100%-280px)] flex-1 bg-white">
            <Frame>
              <Element is="div" id="container" canvas>
                <Element canvas is={Layout}>
                  ABC
                </Element>
                <Layout>World</Layout>
                <Element is={Column} id="column-1" canvas>
                  <Text />
                </Element>
                <HeroBanner />
                <Image />
                {/* <AnnouncementBar text="Welcome to my store" />
                <StoreHeader />
                <ProductsSection title="Featured products" />
                <Footer /> */}
              </Element>
            </Frame>
          </div>

          <Toolbox />
          <SettingPanel />
        </div>
      </Editor>
    </div>
  );
};

export default PageBuilder;
