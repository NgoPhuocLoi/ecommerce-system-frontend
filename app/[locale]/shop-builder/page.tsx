import React from "react";
import PageBuilder from "./_components/page-builder";
import { getPages } from "@/actions/online-shop";
import { redirect } from "@/i18n/routing";
import { getProducts } from "@/actions/product";

const Page = async () => {
  const [pagesRes, productsRes] = await Promise.all([
    getPages(),
    getProducts(),
  ]);
  if (pagesRes.statusCode !== 200 || productsRes.statusCode !== 200) {
    return redirect("/sign-in");
  }
  return (
    <div>
      <PageBuilder pages={pagesRes.metadata} products={productsRes.metadata} />
    </div>
  );
};

export default Page;
