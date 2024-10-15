import React from "react";
import { Column } from "./column";
import { Text } from "./text";
import { Link } from "./link";
import { Element } from "@craftjs/core";
import { Link as RouterLink } from "@/i18n/routing";
import { ShoppingCart, ShoppingCartIcon, User, UserIcon } from "lucide-react";
import { useAtom } from "jotai";
import { pagesAtom } from "@/app/[locale]/shop-builder/_atoms/page-atom";
import { useSearchParams } from "next/navigation";

export const Navbar = () => {
  const [pages] = useAtom(pagesAtom);
  const searchParams = useSearchParams();
  return (
    // <Element is={Column} id="nav-bar" canvas>
    <Column
      bgColor="#000"
      padding="16px"
      flexDirection="row"
      contentAlign="flex-start"
    >
      <Text
        content="Home"
        bgColor="transparent"
        padding="8px"
        textColor="#fff"
        fontWeight="700"
        fontSize={24}
      />

      {pages.map((page) => (
        <Link
          key={page.id}
          url={`/admin-builder?themeId=${searchParams.get("themeId")}&pageId=${page.id}`}
          content={page.name}
          padding="8px"
          bgColor="transparent"
          textColor="white"
          fontSize={16}
        />
      ))}

      <div className="ml-auto flex gap-4">
        <Link url="/login" bgColor="transparent" textColor="#fff">
          <User size={24} />
        </Link>
        <Link url="/cart" bgColor="transparent" textColor="#fff">
          <ShoppingCart size={24} />
        </Link>
      </div>
    </Column>
    // </Element>
  );
};
