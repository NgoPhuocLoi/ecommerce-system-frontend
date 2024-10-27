import { Editor, Frame, Element, useEditor } from "@craftjs/core";
import RenderNode from "../../../components/render-node";
import * as theme2 from "@/components/editable/theme-2";
import * as editableComponentsV2 from "@/components/editable/v2";
import { useEffect, useState } from "react";
import lz from "lz-string";

interface IDefaultLayoutRendererProps {
  defaultLayout?: string;
}

const Wrapper = ({ defaultLayout }: { defaultLayout: string }) => {
  const { actions } = useEditor();

  useEffect(() => {
    if (defaultLayout) {
      const decompressedLayout = lz.decompressFromBase64(defaultLayout);
      actions.deserialize(decompressedLayout);
    }
  }, [defaultLayout]);

  return (
    <Frame>
      <Element is={editableComponentsV2.PlaceholderContainer} canvas>
        <editableComponentsV2.PlaceholderContainer />
      </Element>
    </Frame>
  );
};

const DefaultLayoutRenderer = ({
  defaultLayout,
}: IDefaultLayoutRendererProps) => {
  return (
    <div className="">
      <Editor
        enabled={false}
        onRender={RenderNode}
        resolver={{
          ...theme2,
          ...editableComponentsV2,
        }}
      >
        <Wrapper defaultLayout={defaultLayout ?? ""} />
      </Editor>
    </div>
  );
};

export default DefaultLayoutRenderer;
