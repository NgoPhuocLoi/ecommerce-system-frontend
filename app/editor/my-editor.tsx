"use client";
import {
  AnnouncementBar,
  Container,
  MyButton,
  Text,
} from "@/components/editable";
import { ImageBanner, StoreHeader } from "@/components/editable/theme-1";
import { Editor, Frame } from "@craftjs/core";
import React, { useEffect, useState } from "react";
import lz from "lz-string";

const MyEditor = () => {
  const [json, setJson] = useState("");

  useEffect(() => {
    const compressed = localStorage.getItem("layout");
    const decompressed = lz.decompressFromBase64(compressed ?? "");
    setJson(decompressed);
    console.log({ json });
  }, [json]);
  return (
    <Editor
      enabled={false}
      resolver={{
        Container,
        MyButton,
        Text,
        AnnouncementBar,
        StoreHeader,
        ImageBanner,
      }}
    >
      {/* <EditorHeader /> */}
      {/* <Toolbox /> */}
      {json && <Frame data={json}></Frame>}
    </Editor>
  );
};

export default MyEditor;
