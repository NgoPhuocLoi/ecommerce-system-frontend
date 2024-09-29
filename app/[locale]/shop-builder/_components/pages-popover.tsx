import { getPages } from "@/actions/online-shop";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useAtom } from "jotai";
import { ChevronDown, ChevronRight, House, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { pagesAtom } from "../_atoms/page-atom";

const PagesPopover = () => {
  const [pages] = useAtom(pagesAtom);
  const [selectedPageId, setSelectedPageId] = useState<number | null>(
    pages[0]?.id,
  );
  // const [pages, setPages] = useState<
  //   {
  //     id: number;
  //     name: string;
  //   }[]
  // >([]);
  const [newPageName, setNewPageName] = useState("");
  const newPageLink = useMemo(
    () => newPageName.toLowerCase().replace(/\s/g, "-"),
    [newPageName],
  );

  // useEffect(() => {
  //   const fetchPages = async () => {
  //     const result = await getPages();
  //     setPages(result.metadata);
  //   };
  //   fetchPages();
  // }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex items-center gap-2" variant="ghost">
          <House size={16} />
          <span>Home page {selectedPageId}</span>
          <ChevronDown size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-3">
          <div className="relative ml-auto w-full flex-1">
            <Search size={16} className="absolute left-2 top-2" />
            <Input
              type="search"
              placeholder="Search..."
              className="bg-background h-8 w-full rounded-lg py-1 pl-8"
            />
          </div>
          {pages.map((page) => (
            <div
              key={page.id}
              className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-gray-100"
            >
              <House size={16} />
              <p className="text-sm">{page.name}</p>
            </div>
          ))}

          <Separator />
          <Dialog>
            <DialogTrigger asChild>
              <Button size={"sm"}>Create new page</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create new page</DialogTitle>
                {/* <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription> */}
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="new-page-name"
                    placeholder="Enter page name"
                    value={newPageName}
                    onChange={(e) => setNewPageName(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Link
                  </Label>
                  <Input
                    id="new-page-link"
                    disabled
                    defaultValue={newPageLink}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PagesPopover;
