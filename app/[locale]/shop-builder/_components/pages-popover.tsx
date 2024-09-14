import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronRight, House, Search } from "lucide-react";

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
          <div className="relative ml-auto w-full flex-1">
            <Search size={16} className="absolute left-2 top-2" />
            <Input
              type="search"
              placeholder="Search..."
              className="bg-background h-8 w-full rounded-lg py-1 pl-8"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-100">
              <House size={16} />
              <p className="text-sm">Home page</p>
            </div>

            <div className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-100">
              <House size={16} />
              <p className="text-sm">Home page</p>
              <ChevronRight size={18} className="ml-auto" />
            </div>

            <div className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-100">
              <House size={16} />
              <p className="text-sm">Home page</p>
            </div>

            <div className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-100">
              <House size={16} />
              <p className="text-sm">Home page</p>
            </div>
          </div>

          <Separator className="my-0" />

          <div className="flex flex-col gap-2">
            <div className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-100">
              <House size={16} />
              <p className="text-sm">Home page</p>
            </div>

            <div className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-100">
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
