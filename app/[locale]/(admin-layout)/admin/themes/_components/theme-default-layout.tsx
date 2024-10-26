"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Editor, Frame } from "@craftjs/core";
import React from "react";
import lz from "lz-string";
import * as theme2 from "@/components/editable/theme-2";
import * as editableComponentsV2 from "@/components/editable/v2";
import PagePlaceholder from "@/app/[locale]/admin-builder/_components/page-placeholder";

interface IThemeDefaultLayoutProps {
  defaultHeaderLayout?: string;
  defaultFooterLayout?: string;
}

const ThemeDefaultLayout = ({
  defaultFooterLayout,
  defaultHeaderLayout,
}: IThemeDefaultLayoutProps) => {
  const decompressedHeaderLayout = lz.decompressFromBase64(
    defaultHeaderLayout ?? "",
  );
  const decompressedFooterLayout = lz.decompressFromBase64(
    defaultFooterLayout ?? "",
  );
  return (
    <div className="mt-2 flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <Label className="mt-auto">Layout mặc định</Label>
      </div>
      <div className="rounded-md border px-4 py-6">
        {!decompressedFooterLayout && !decompressedHeaderLayout ? (
          <div className="flex flex-col gap-2">
            <p className="text-center">Chủ đề này chưa có layout mặc định!</p>
            <Button className="mx-auto">+ Thêm layout mặc định</Button>
          </div>
        ) : (
          <>
            <Editor
              resolver={{ ...editableComponentsV2, ...theme2 }}
              enabled={false}
            >
              <Frame json={decompressedHeaderLayout}></Frame>
            </Editor>

            <PagePlaceholder />

            <Editor
              resolver={{ ...editableComponentsV2, ...theme2 }}
              enabled={false}
            >
              <Frame json={decompressedFooterLayout}></Frame>
            </Editor>
          </>
        )}
      </div>
    </div>
  );
};

export default ThemeDefaultLayout;
