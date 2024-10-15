import React from "react";
import PageBuilder from "../shop-builder/_components/page-builder";
import { getTheme } from "@/actions/themes";
import { redirect } from "@/i18n/routing";
import { Theme } from "@/app/interfaces/themes";

const Page = async ({
  searchParams,
}: {
  searchParams: { themeId: string; pageId: string };
}) => {
  const theme: Theme = await getTheme(searchParams.themeId);
  if (!theme) {
    return redirect("/admin/themes");
  }
  console.log({ theme });
  if (!searchParams.pageId) {
    if (theme.defaultPages?.length === 0) {
      return redirect(`/admin/themes/${searchParams.themeId}`);
    }
    return redirect(
      `/admin-builder?themeId=${searchParams.themeId}&pageId=${theme.defaultPages[0].id}`,
    );
  }
  return (
    <div>
      <PageBuilder
        isAdminBuilder
        pages={theme.defaultPages}
        products={[]}
        returnLink="/admin/themes"
        defaultLayout={theme.defaultLayout}
      />
    </div>
  );
};

export default Page;
