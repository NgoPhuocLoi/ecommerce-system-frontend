import React from "react";
import PageBuilder from "./_components/page-builder";
import { getOnlineShop, getPages } from "@/actions/online-shop";
import { redirect } from "next/navigation";
import { getProducts } from "@/actions/product";

const Page = async ({ searchParams }: { searchParams: { pageId: string } }) => {
  const [pagesRes, productsRes, onlineShop] = await Promise.all([
    getPages(),
    getProducts(),
    getOnlineShop(),
  ]);
  if (pagesRes.statusCode !== 200 || productsRes.statusCode !== 200) {
    return redirect("/sign-in");
  }

  if (!searchParams.pageId) {
    return redirect(`/shop-builder?pageId=${pagesRes.metadata[0].id}`);
  }

  return (
    <div>
      <PageBuilder
        pages={pagesRes.metadata}
        products={productsRes.metadata}
        defaultHeaderLayout={onlineShop[0].defaultHeaderLayout}
        defaultFooterLayout={onlineShop[0].defaultFooterLayout}
      />
    </div>
  );
};

export default Page;
