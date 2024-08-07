"use client";

import {
  Container,
  MyButton,
  Text,
  AnnouncementBar,
} from "@/components/editable";
import { Editor, Element, Frame } from "@craftjs/core";
import Toolbox from "./toolbox";
import EditorHeader from "./editor-header";
import { ReactElement, useEffect, useState } from "react";
import { ImageBanner, StoreHeader } from "@/components/editable/theme-1";
import lz from "lz-string";
import { useApplyRef } from "@/hooks/useApplyRef";
import clsx from "clsx";

const RenderNode = ({ render }: { render: ReactElement }) => {
  const { isActive, applyRef } = useApplyRef();
  return (
    <div
      ref={applyRef}
      className={clsx(
        "border border-dashed border-transparent  cursor-pointer",
        {
          "outline outline-blue-400": isActive,
          "hover:border-blue-500": !isActive,
        }
      )}
    >
      {render}
    </div>
  );
};

const EditorClient = () => {
  const [json, setJson] = useState("");

  useEffect(() => {
    const compressed = localStorage.getItem("layout");
    const decompressed = lz.decompressFromBase64(compressed ?? "");
    setJson(decompressed);
    console.log({ json });
  }, [json]);
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-200">
      <Editor
        onRender={RenderNode}
        resolver={{
          Container,
          MyButton,
          Text,
          AnnouncementBar,
          StoreHeader,
          ImageBanner,
        }}
      >
        <EditorHeader />
        <Toolbox />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-16 sm:pr-[256px]">
          <Frame data={json}>
            <Element is="div" id="container" canvas>
              <AnnouncementBar text="Welcome to my store" />
              <StoreHeader />
              <ImageBanner />
            </Element>
          </Frame>
        </div>
      </Editor>
    </div>
  );
};

export default EditorClient;
