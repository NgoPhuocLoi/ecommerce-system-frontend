import { getThemes } from "@/actions/themes";
import { Theme } from "@/app/interfaces/themes";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import NewThemeDialog from "./_components/new-theme-dialog";
import { getTopLevelCategories } from "@/actions/categories";
import { Category } from "@/app/interfaces/category";
import ThemeActions from "./_components/theme-actions";
import Link from "next/link";

const PLACEHOLDER_IMAGE_URL =
  "https://bc-stencil-production.s3.amazonaws.com/m/55cbfb30-4c33-013d-7a5c-52329bccbb28/large_thumb_screenshot.png";

const Page = async () => {
  const [themes, topLevelCategories]: [Theme[], Category[]] = await Promise.all(
    [getThemes(), getTopLevelCategories()],
  );

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Quản lý chủ đề</h1>
        <NewThemeDialog topLevelCategories={topLevelCategories} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {themes.map((theme) => (
          <Card key={theme.id} className="cursor-pointer p-0 hover:shadow-md">
            <CardContent className="p-3">
              <Link href={`/admin/themes/${theme.id}`}>
                <div className="relative">
                  <Image
                    src={PLACEHOLDER_IMAGE_URL}
                    alt="Theme"
                    width={350}
                    height={450}
                  />
                </div>
              </Link>
              <div className="mt-4 flex items-center justify-between">
                <Link className="flex-1" href={`/admin/themes/${theme.id}`}>
                  <p className="text-lg font-bold">{theme.name}</p>
                  <p className="text-gray-600">{theme.description}</p>
                </Link>

                <ThemeActions themeId={theme.id} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Page;
