"use client";

import { Container, MyButton, Text } from "@/components/editable";
import { Editor, Element, Frame } from "@craftjs/core";
import Toolbox from "./toolbox";
import EditorHeader from "./editor-header";

const EditorClient = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <EditorHeader />
      <Editor resolver={{ Container, MyButton, Text }}>
        <Toolbox />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-16">
          <Frame>
            <Element is={Container} canvas flexDirection="column">
              <MyButton label="Click me" />
              <Text content="Hello world" />
              <Text content="Hello world" />
              <Element is={Container} canvas flexDirection="column">
                <Text content="Text in container" />
                <MyButton label="Button in container" />
              </Element>
            </Element>
          </Frame>
        </div>
      </Editor>
    </div>
  );
};

export default EditorClient;
