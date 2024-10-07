import { Page } from "@/app/interfaces/online-shop";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import clsx from "clsx";

interface IPagesInThemeProps {
  pages: Page[];
}

const PagesInTheme = ({ pages }: IPagesInThemeProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <Label className="mt-auto">Trang mặc định</Label>
        <Button size={"sm"} className="py-1">
          + Trang mới
        </Button>
      </div>
      <div>
        <div className="grid grid-cols-9 rounded-tl-md rounded-tr-md border bg-gray-100">
          <Label className="col-span-3 flex-1 p-3 text-sm">Tên trang</Label>
          <Label className="col-span-3 w-fit p-3 text-sm">Đường dẫn</Label>
          <Label className="col-span-2 w-fit p-3 text-center text-sm">
            Hiển trị trên menu
          </Label>
          <Label className="w-fit p-3 text-sm">Thao tác</Label>
        </div>
        {pages.map((page) => (
          <div
            key={page.id}
            className={clsx("grid grid-cols-9 border border-t-0 text-sm", {
              "rounded-bl-md rounded-br-md":
                page.id === pages[pages.length - 1].id,
            })}
          >
            <div className="text-md col-span-3 flex-1 p-3">{page.name}</div>
            <div className="text-md col-span-3 w-fit p-3">{page.link}</div>
            <div className="text-md col-span-2 flex w-full justify-between p-3">
              <Checkbox />
            </div>
            <div className="text-md w-fit p-3">Thao tác</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagesInTheme;
