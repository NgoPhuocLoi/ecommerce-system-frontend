"use client";
import {
  AnnouncementBar,
  Container,
  GridContainer,
  MyButton,
  Text,
} from "@/components/editable";
import * as theme1 from "@/components/editable/theme-1";
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
        GridContainer,
        MyButton,
        Text,
        ...theme1,
      }}
    >
      {/* <EditorHeader /> */}
      {/* <Toolbox /> */}
      {json && <Frame data={json}></Frame>}
    </Editor>
  );
};

export default MyEditor;
