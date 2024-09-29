import React from "react";
import PageBuilder from "./_components/page-builder";
import { getPages } from "@/actions/online-shop";
import { redirect } from "@/i18n/routing";

const Page = async () => {
  const res = await getPages();
  if (res.statusCode !== 200) {
    return redirect("/auth/login");
  }
  console.log({ pages: res.metadata });
  return (
    <div>
      <PageBuilder pages={res.metadata} />
    </div>
  );
};

export default Page;
