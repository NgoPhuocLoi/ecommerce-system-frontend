"use client";
import React, { ReactNode } from "react";
import * as editable from "@/components/editable";
import { Editor as CraftEditor, Element, Frame } from "@craftjs/core";

const Editor = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-4 mr-4">
      <CraftEditor resolver={editable}>
        <div>
          <Frame>
            <Element is={editable.Container} flexDirection="column">
              <editable.MyButton label="CLick me" />
              <editable.Text content="Hello world" />
              <Element is={editable.Container} flexDirection="column">
                <editable.Text content="Text in container" />
                <editable.MyButton label="Button in container" />
              </Element>
            </Element>
          </Frame>
        </div>
      </CraftEditor>
    </div>
  );
};

export default Editor;
