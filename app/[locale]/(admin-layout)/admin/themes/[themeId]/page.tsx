import { getTopLevelCategories } from "@/actions/categories";
import { getTheme, updateTheme } from "@/actions/themes";
import CategoryList from "@/app/[locale]/(default-layout)/products/_components/category-list";
import { Category } from "@/app/interfaces/category";
import { Theme } from "@/app/interfaces/themes";
import { Button } from "@/components/ui/button";
import ServerTextField from "@/components/ui/server-text-field";
import ServerTextArea from "@/components/ui/server-textarea";
import { Link } from "@/i18n/routing";
import { ChevronLeft } from "lucide-react";
import PagesInTheme from "../_components/pages-in-theme";
import ThemeDefaultLayout from "../_components/theme-default-layout";
import DetailThemeAction from "./_components/detail-theme-actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Page = async ({ params }: { params: { themeId: string } }) => {
  const [topLevelCategories, theme]: [Category[], Theme] = await Promise.all([
    getTopLevelCategories(),
    getTheme(params.themeId),
  ]);

  const handleUpdateTheme = async (data: FormData) => {
    "use server";
    const updatedData = {
      name: data.get("name") as string,
      description: data.get("description") as string,
      recommendedForCategoryId: Number(data.get("recommendedForCategoryId")),
    };
    const result = await updateTheme(params.themeId, updatedData);
    console.log({ result });
  };

  return (
    <form action={handleUpdateTheme}>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-1 text-lg font-semibold md:text-2xl">
            <Button asChild type="button" variant={"ghost"} size={"icon"}>
              <Link href={"/admin/themes"}>
                <ChevronLeft />
              </Link>
            </Button>
            Chi tiết chủ đề
          </h1>

          <DetailThemeAction />
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <ServerTextField
              name={"name"}
              label={"Tên chủ đề"}
              id={"theme-detail-name"}
              type={"text"}
              defaultValue={theme.name}
            />

            <div className="flex flex-col gap-3">
              <Label>Đề xuất cho danh mục</Label>
              <Select
                name="recommendedForCategoryId"
                // defaultValue={field.value?.toString()}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn danh mục đề xuất" />
                </SelectTrigger>
                <SelectContent>
                  {topLevelCategories.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <ServerTextArea
            name={"description"}
            label={"Mô tả chủ đề"}
            id={"theme-detail-description"}
            defaultValue={theme.description}
          />
          <PagesInTheme pages={theme.defaultPages} />

          <ThemeDefaultLayout
            defaultFooterLayout={theme.defaultFooterLayout}
            defaultHeaderLayout={theme.defaultHeaderLayout}
          />
        </div>
      </main>
    </form>
  );
};

export default Page;
