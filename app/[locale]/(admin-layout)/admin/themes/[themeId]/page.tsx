import { getTopLevelCategories } from "@/actions/categories";
import { getTheme } from "@/actions/themes";
import CategoryList from "@/app/[locale]/(default-layout)/products/_components/category-list";
import { Category } from "@/app/interfaces/category";
import { Theme } from "@/app/interfaces/themes";
import { Button } from "@/components/ui/button";
import ServerTextField from "@/components/ui/server-text-field";
import ServerTextArea from "@/components/ui/server-textarea";
import { Link } from "@/i18n/routing";
import { ChevronLeft } from "lucide-react";
import React from "react";

const Page = async ({ params }: { params: { themeId: string } }) => {
  const [topLevelCategories, theme]: [Category[], Theme] = await Promise.all([
    getTopLevelCategories(),
    getTheme(params.themeId),
  ]);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-1 text-lg font-semibold md:text-2xl">
          <Button variant={"ghost"} size={"icon"}>
            <Link href={"/admin/themes"}>
              <ChevronLeft />
            </Link>
          </Button>
          Chi tiết chủ đề
        </h1>

        <div className="flex gap-2">
          <Button variant={"secondary"}>Tuỳ chỉnh</Button>
          <Button variant="destructive">Xóa</Button>
        </div>
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

          <CategoryList
            title="Đề xuất cho danh mục sản phẩm"
            topLevelCategories={topLevelCategories ?? []}
          />
        </div>

        <ServerTextArea
          name={"description"}
          label={"Mô tả chủ đề"}
          id={"theme-detail-description"}
          defaultValue={theme.description}
        />
      </div>
    </main>
  );
};

export default Page;
