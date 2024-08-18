import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEditor } from "@craftjs/core";
import { ClipboardCheck } from "lucide-react";
import React, { useState } from "react";

const Setting = () => {
  const { selected } = useEditor((state) => {
    const currentNodeId = state.events.selected.values().next().value;
    // NOTE: render too much times
    // console.log({ currentNodeId });
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.setting,
      };
    }
    // console.log({ selected });
    return {
      selected,
    };
  });
  return (
    <Tabs
      onValueChange={(value) => {
        console.log(value);
      }}
      defaultValue="complete"
    >
      <div className="fixed w-[248px] bg-white top-14 right-0 h-full p-4">
        <div className="hidden flex-col space-y-4 sm:flex md:order-2">
          <div className="grid gap-2">
            <HoverCard openDelay={200}>
              <HoverCardTrigger asChild>
                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Mode
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-[320px] text-sm" side="left">
                Choose the interface that best suits your task. You can provide:
                a simple prompt to complete, starting and ending text to insert
                a completion within, or some text with instructions to edit it.
              </HoverCardContent>
            </HoverCard>
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="complete">
                <span className="sr-only">Complete</span>
                <ClipboardCheck size={16} />
              </TabsTrigger>
              <TabsTrigger value="insert">
                <span className="sr-only">Insert</span>
                <ClipboardCheck size={16} />
              </TabsTrigger>
              <TabsTrigger value="edit">
                <span className="sr-only">Edit</span>
                <ClipboardCheck size={16} />
              </TabsTrigger>
            </TabsList>
          </div>

          {selected &&
            selected.settings &&
            React.createElement(selected.settings)}
        </div>
      </div>
    </Tabs>
  );
};

export default Setting;
