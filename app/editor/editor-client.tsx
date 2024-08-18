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
import * as theme1 from "@/components/editable/theme-1";
import lz from "lz-string";
import { useApplyRef } from "@/hooks/useApplyRef";
import clsx from "clsx";

const { ImageBanner, ProductsSection, StoreHeader, Footer } = theme1;

const defaultLayout =
  "N4IgSg8hAqIFygC4E8AOBTeIAmBLAbiADQi4DOAwgIYB2+VZ8iATgK7omrMD2qjCpbFgDG3Goiq4a6ZiAC+JPGVQAbKsgByVALaY4OAsRDDWZRN23xgCkAAtc2bOhrwAZlRVkOIGtyf8AbRAALQBlUIBHXGQANQANVAAjIwj0AHENDBiAWgAJAAYjABEaAFUAaSpQ4QB3XHKQAF0SFSkAa3RsDT90fmsbVIysvMKBFAwrEGZe7hV8Tq1dLABBGl9WGmF0XXEAISpZG3JqOgY3Dy9OHj5J1zFEUNwALz0ARgA2EkR0AA9ELAA6ugVKJdAACcxg7TIMFmbjTeSKciqdSLPQgVbrTbbZyIfayEgmOGWBA2VAHXFYSAwIz2RzOc6eby+fzwALNECtGgdLo9PpyGxhSLReJJSbjPSgaZkWbzLo6dGhczTXLoKhOQ4kY60ej8dxMq68flI5RqTQKrBK+HoVXqmRGInmEnWTgU8RUqCwEh0pwuOD6y4+PlsjlcnndVmkmwlCpVWr1cVoSVTGZzBYW/QASW0VAA5uh9mt7UdKDqzv6Lt4uEarDYlCjzUsszn84XpATjKYnbXXdN3fpqV67A5fYzAyzeiGWu0FsGo3IgA";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const compressed = localStorage.getItem("layout");
    const decompressed = lz.decompressFromBase64(compressed ?? defaultLayout);
    setJson(decompressed);
    console.log({ json });
    setLoading(false);
  }, [json]);
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-200">
      <Editor
        onRender={RenderNode}
        resolver={{
          Container,
          MyButton,
          Text,
          ...theme1,
        }}
      >
        <EditorHeader />
        <Toolbox />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-16 sm:pr-[256px]">
          {/* {!loading && json && (
            <Frame data={json}>
              <Element is="div" id="container" canvas></Element>
            </Frame>
          )} */}

          <Frame data={json}>
            <Element is="div" id="container" canvas>
              <AnnouncementBar text="Welcome to my store" />
              <StoreHeader />
              <ImageBanner />
              <ProductsSection title="Featured products" />
              <Footer />
            </Element>
          </Frame>
        </div>
      </Editor>
    </div>
  );
};

export default EditorClient;
