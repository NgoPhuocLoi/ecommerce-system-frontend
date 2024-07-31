"use client";
import React, { ReactNode } from "react";
import { Container, MyButton, Text } from "@/components/editable";
import { Editor as CraftEditor, Element, Frame } from "@craftjs/core";

const Editor = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-4">
      <CraftEditor resolver={{ Container, MyButton, Text }}>
        <Frame>
          <Element is={Container} flexDirection="column">
            <MyButton label="CLick me" />
            <Text content="Hello world" />
            <Element is={Container} flexDirection="column">
              <Text content="Text in container" />
              <MyButton label="Button in container" />
            </Element>
          </Element>
        </Frame>
      </CraftEditor>
    </div>
  );
};

export default Editor;
