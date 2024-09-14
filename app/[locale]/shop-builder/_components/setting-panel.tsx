import { Button } from "@/components/ui/button";
import { useEditor } from "@craftjs/core";
import { ChevronLeft } from "lucide-react";
import React from "react";

const SettingPanel = () => {
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

  if (!selected) {
    return <></>;
  }

  return (
    <div className="fixed right-0 top-14 h-full w-[264px] bg-white p-4">
      <div className="mb-4 flex items-center gap-2">
        <Button variant={"ghost"} size={"icon"}>
          <ChevronLeft />
        </Button>
        <h4 className="text-lg font-bold">Column 1</h4>
      </div>
      {selected && selected.settings && React.createElement(selected.settings)}
    </div>
  );
};

export default SettingPanel;
