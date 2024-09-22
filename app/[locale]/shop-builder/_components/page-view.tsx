"use client";
import { Editor, Frame, Element } from "@craftjs/core";
import React, { useEffect, useState } from "react";
import * as editableComponentsV2 from "@/components/editable/v2";
import lz from "lz-string";
import { useAtom } from "jotai";
import { productsAtom } from "../_atoms/product-atom";
import { getProducts } from "@/actions/product";
import * as theme2 from "@/components/editable/theme-2";

const PageView = () => {
  const [json, setJson] = useState("");
  const [, setProducts] = useAtom(productsAtom);

  useEffect(() => {
    const findProducts = async () => {
      console.log("RUN");
      const res = await getProducts();
      setProducts(res.metadata);
    };

    findProducts();
  }, []);

  useEffect(() => {
    //   setLoading(true);
    const compressed = localStorage.getItem("layout");
    const decompressed = lz.decompressFromBase64(compressed ?? "");
    setJson(decompressed);
    console.log({ json });
    //   setLoading(false);
  }, [json]);
  return (
    <div>
      <Editor enabled={false} resolver={{ ...editableComponentsV2, ...theme2 }}>
        <div className="h-full w-full flex-1 bg-white">
          {json && (
            <Frame data={json}>
              <Element is="div" id="container" canvas></Element>
            </Frame>
          )}
        </div>
      </Editor>
    </div>
  );
};

export default PageView;
