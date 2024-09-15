import { getShops } from "@/app/services/shop";
import { auth } from "@/auth";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import ShopList from "./shop-list";
import { getTranslations } from "next-intl/server";

export interface Shop {
  id: string;
  name: string;
}

const ShopSelection = async () => {
  const session = await auth();

  if (!session) {
    return null;
  }
  const t = await getTranslations("ShopSelection");
  const shops: Shop[] = (await getShops(session.accessToken)).metadata;

  return (
    <div className="flex h-screen w-screen items-center justify-center py-20">
      <Card className="h-full w-[476px]">
        <div className="flex items-center justify-between">
          <CardHeader>
            <CardTitle>{t("title")}Loi</CardTitle>
            <CardDescription>{t("description")}</CardDescription>
          </CardHeader>

          <Button className="mr-6" asChild>
            <Link href="/shop/question">{t("createShopButton")}</Link>
          </Button>
        </div>
        <Separator />
        <CardContent>
          {/* <ScrollArea> */}
          <ShopList shops={shops} />

          {/* </ScrollArea> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShopSelection;
