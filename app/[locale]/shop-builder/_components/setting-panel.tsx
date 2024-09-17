import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useEditor } from "@craftjs/core";
import {
  ChevronLeft,
  Copy,
  EllipsisVertical,
  Trash,
  Users,
} from "lucide-react";
import React from "react";

const SettingPanel = () => {
  const {
    selected,
    actions: { selectNode, delete: deleteNode, add },
    query,
  } = useEditor((state) => {
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
      <div className="flex items-center gap-2">
        <Button
          onClick={() => {
            // selectNode(undefined);
            let parent: string | undefined = query
              .node(selected.id)
              .ancestors()[0];
            if (parent === "ROOT") parent = undefined;
            selectNode(parent);
          }}
          variant={"ghost"}
          size={"icon"}
        >
          <ChevronLeft />
        </Button>
        <h4 className="text-lg font-bold">{selected.name}</h4>

        {query.node(selected.id).isDeletable() && (
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <EllipsisVertical size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => {
                    let parent: string | undefined = query
                      .node(selected.id)
                      .ancestors()[0];
                    const {
                      data: { type, props },
                    } = query.node(selected.id).get();
                    add(
                      query.createNode(React.createElement(type, props)),
                      parent,
                    );
                  }}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  <span>Duplicate</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => {
                    deleteNode(selected.id);
                  }}
                  className="text-red-500 hover:!text-red-500"
                >
                  <Trash className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
      <Separator className="my-4 bg-gray-400" />
      {selected?.settings && React.createElement(selected.settings)}
    </div>
  );
};

export default SettingPanel;
