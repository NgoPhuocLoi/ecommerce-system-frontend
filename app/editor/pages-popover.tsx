import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, ChevronRight, House, Search } from "lucide-react";
import React from "react";

const PagesPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex items-center gap-2" variant="ghost">
          <House size={16} />
          <span>Home page</span>
          <ChevronDown size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-3">
          <div className="relative ml-auto flex-1 w-full">
            <Search size={16} className="absolute left-2 top-2" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full h-8 py-1 rounded-lg bg-background pl-8 "
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 py-1 px-2 cursor-pointer rounded-md hover:bg-gray-100">
              <House size={16} />
              <p className="text-sm">Home page</p>
            </div>

            <div className="flex items-center gap-2 py-1 px-2 cursor-pointer rounded-md hover:bg-gray-100">
              <House size={16} />
              <p className="text-sm">Home page</p>
              <ChevronRight size={18} className="ml-auto" />
            </div>

            <div className="flex items-center gap-2 py-1 px-2 cursor-pointer rounded-md hover:bg-gray-100">
              <House size={16} />
              <p className="text-sm">Home page</p>
            </div>

            <div className="flex items-center gap-2 py-1 px-2 cursor-pointer rounded-md hover:bg-gray-100">
              <House size={16} />
              <p className="text-sm">Home page</p>
            </div>
          </div>

          <Separator className="my-0" />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 py-1 px-2 cursor-pointer rounded-md hover:bg-gray-100">
              <House size={16} />
              <p className="text-sm">Home page</p>
            </div>

            <div className="flex items-center gap-2 py-1 px-2 cursor-pointer rounded-md hover:bg-gray-100">
              <House size={16} />
              <p className="text-sm">Home page</p>
              <ChevronRight size={18} className="ml-auto" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PagesPopover;
