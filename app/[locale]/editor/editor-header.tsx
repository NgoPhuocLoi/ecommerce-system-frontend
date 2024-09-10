import { Button } from "@/components/ui/button";
import { LogOut, Undo2, Redo2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import PagesPopover from "./pages-popover";
import { useEditor } from "@craftjs/core";
import lz from "lz-string";

const EditorHeader = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const handleSave = () => {
    const json = query.serialize();
    const encoded = lz.compressToBase64(json);
    localStorage.setItem("layout", encoded);
  };

  return (
    <header className="sticky z-10 top-0 flex justify-between h-14 items-center gap-4 border-b bg-white px-4 md:px-6">
      <Link
        href="/dashboard"
        className="p-2 hover:bg-gray-100 rounded-md cursor-pointer "
      >
        <LogOut className="rotate-180 h-5" />
      </Link>

      <div className="cursor-pointer">
        <PagesPopover />
      </div>

      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <div className="px-1 py-2 hover:bg-gray-100 rounded-md  cursor-pointer ">
            <Undo2 className="h-5" />
          </div>
          <div className="px-1 py-2 hover:bg-gray-100 rounded-md  cursor-pointer ">
            <Redo2 className="h-5 cursor-pointer" />
          </div>
        </div>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </header>
  );
};

export default EditorHeader;
