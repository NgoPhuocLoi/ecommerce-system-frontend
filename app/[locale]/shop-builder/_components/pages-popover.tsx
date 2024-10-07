import { createPage } from "@/actions/online-shop";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { ChevronDown, House, Search, StickyNote } from "lucide-react";
import { useEffect, useState } from "react";
import { pagesAtom, selectedPageAtom } from "../_atoms/page-atom";

import { Page } from "@/app/interfaces/online-shop";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createPageFormSchema = z.object({
  name: z
    .string()
    .min(2, "Tên trang phải trên 2 ký tự")
    .max(50, "Tên trang không được quá 50 ký tự"),
});

const PagesPopover = () => {
  const [pages, setPages] = useAtom(pagesAtom);
  const [selectedPage, setSelectedPage] = useAtom(selectedPageAtom);
  const [openCreateNewPageForm, setOpenCreateNewPageForm] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  useEffect(() => {
    setSelectedPage(pages[0]);
  }, []);

  const form = useForm<z.infer<typeof createPageFormSchema>>({
    resolver: zodResolver(createPageFormSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof createPageFormSchema>) => {
    const newPageName = values.name;
    const isPageNameExist = pages.some((page) => page.name === newPageName);
    if (isPageNameExist) {
      return;
    }
    const res = await createPage(newPageName);
    if (res.statusCode === 201) {
      setPages([...pages, res.metadata]);
      form.reset();
      setOpenCreateNewPageForm(false);
    }
  };

  const onSelectPage = (page: Page) => {
    setSelectedPage(page);
    setOpenPopover(false);
  };

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger asChild>
        <Button className="flex items-center gap-2" variant="ghost">
          <StickyNote size={16} />
          <span>{selectedPage?.name}</span>
          <ChevronDown size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
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
              onClick={() => onSelectPage(page)}
              key={page.id}
              className={clsx(
                "flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-gray-100",
                {
                  "bg-gray-100": selectedPage?.id === page.id,
                },
              )}
            >
              <StickyNote size={16} />
              <p className="text-sm">{page.name}</p>
            </div>
          ))}

          <Separator />
          <Dialog
            open={openCreateNewPageForm}
            onOpenChange={setOpenCreateNewPageForm}
          >
            <DialogTrigger asChild>
              <Button size={"sm"}>Tạo trang mới</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Tạo trang mới</DialogTitle>
                <DialogDescription>
                  Tạo trang mới để bắt đầu thiết kế
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tên trang</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button className="ml-auto" type="submit">
                    Submit
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PagesPopover;
