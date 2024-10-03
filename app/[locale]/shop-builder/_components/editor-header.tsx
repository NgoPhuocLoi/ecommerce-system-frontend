import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/routing";
import { useEditor } from "@craftjs/core";
import { Eye, EyeOff, LogOut, Redo2, Undo2 } from "lucide-react";
import lz from "lz-string";
import { Link } from "@/i18n/routing";
import PagesPopover from "./pages-popover";
import { useAtom } from "jotai";
import { selectedPageAtom } from "../_atoms/page-atom";
import { useState } from "react";
import { updatePage } from "@/actions/online-shop";

const EditorHeader = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const [selectedPage, setSelectedPage] = useAtom(selectedPageAtom);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSave = async () => {
    setLoading(true);
    try {
      const json = query.serialize();
      const encoded = lz.compressToBase64(json);
      if (!selectedPage) return;
      const updatedRes = await updatePage(selectedPage.id, { layout: encoded });
      // if (updatedRes.statusCode === 200) {
      //   setSelectedPage(updatedRes.metadata);
      // }
    } catch (error) {
    } finally {
      setLoading(false);
    }
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
            onClick={() => {
              console.log("RUN HERE");
              actions.setOptions((options) => {
                options.enabled = !options.enabled;
              });
            }}
            title="View your online shop"
            className="mr-6 cursor-pointer rounded-md px-1 py-2 hover:bg-gray-100"
          >
            {enabled ? <Eye className="h-5" /> : <EyeOff className="h-5" />}
          </div>
          <div className="cursor-pointer rounded-md px-1 py-2 hover:bg-gray-100">
            <Undo2 className="h-5" />
          </div>
          <div className="cursor-pointer rounded-md px-1 py-2 hover:bg-gray-100">
            <Redo2 className="h-5 cursor-pointer" />
          </div>
        </div>
        <Button disabled={loading} onClick={handleSave}>
          {" "}
          {loading ? "Updating...." : "Save"}
        </Button>
      </div>
    </header>
  );
};

export default EditorHeader;
