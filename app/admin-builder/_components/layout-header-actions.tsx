import { Button } from "@/components/ui/button";
import { Eye, Redo2, Undo2 } from "lucide-react";
import React from "react";

const LayoutHeaderActions = () => {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-1">
        <div
          onClick={() => {
            console.log("RUN HERE");
            // actions.setOptions((options) => {
            //   options.enabled = !options.enabled;
            // });
          }}
          title="View your online shop"
          className="mr-6 cursor-pointer rounded-md px-1 py-2 hover:bg-gray-100"
        >
          <Eye className="h-5" />
          {/* {enabled ? (
                        <Eye className="h-5" />
                      ) : (
                        <EyeOff className="h-5" />
                      )} */}
        </div>
        <div className="cursor-pointer rounded-md px-1 py-2 hover:bg-gray-100">
          <Undo2 className="h-5" />
        </div>
        <div className="cursor-pointer rounded-md px-1 py-2 hover:bg-gray-100">
          <Redo2 className="h-5 cursor-pointer" />
        </div>
      </div>
      <Button>Lưu a</Button>
    </div>
  );
};

export default LayoutHeaderActions;
