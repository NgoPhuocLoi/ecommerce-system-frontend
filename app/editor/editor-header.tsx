import { Button } from "@/components/ui/button";
import { LogOut, Undo2, Redo2, Eye } from "lucide-react";
import Link from "next/link";
import React from "react";
import PagesPopover from "./pages-popover";
import { useEditor } from "@craftjs/core";
import lz from "lz-string";
import { useRouter } from "next/navigation";

const EditorHeader = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const router = useRouter();

  const handleSave = () => {
    const json = query.serialize();
    const encoded = lz.compressToBase64(json);
    localStorage.setItem("layout", encoded);
  };

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-white px-4 md:px-6">
      <Link
        href="/dashboard"
        className="cursor-pointer rounded-md p-2 hover:bg-gray-100"
      >
        <LogOut className="h-5 rotate-180" />
      </Link>

      <div className="cursor-pointer">
        <PagesPopover />
      </div>

      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <div
            onClick={() => router.push("/shop/12/display")}
            title="View your online shop"
            className="mr-6 cursor-pointer rounded-md px-1 py-2 hover:bg-gray-100"
          >
            <Eye className="h-5" />
          </div>
          <div className="cursor-pointer rounded-md px-1 py-2 hover:bg-gray-100">
            <Undo2 className="h-5" />
          </div>
          <div className="cursor-pointer rounded-md px-1 py-2 hover:bg-gray-100">
            <Redo2 className="h-5 cursor-pointer" />
          </div>
        </div>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </header>
  );
};

export default EditorHeader;
