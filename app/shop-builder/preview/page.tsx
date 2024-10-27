import React from "react";
import PageView from "../_components/page-view";
import { getOnlineShop, getPages } from "@/actions/online-shop";
import { getProducts } from "@/actions/product";

const Page = async () => {
  const [pagesRes, productsRes, onlineShop] = await Promise.all([
    getPages(),
    getProducts(),
    getOnlineShop(),
  ]);
  return (
    <div>
      <PageView
        pages={pagesRes.metadata}
        products={productsRes.metadata}
        defaultHeaderLayout={onlineShop[0].defaultHeaderLayout}
        defaultFooterLayout={onlineShop[0].defaultFooterLayout}
      />
    </div>
  );
};

export default Page;
