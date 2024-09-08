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

export interface Shop {
  id: string;
  name: string;
}

const ShopSelection = async () => {
  const session = await auth();

  if (!session) {
    return null;
  }

  const shops: Shop[] = (await getShops(session.accessToken)).metadata;

  return (
    <div className="flex h-screen w-screen items-center justify-center py-20">
      <Card className="h-full w-[476px]">
        <div className="flex items-center justify-between">
          <CardHeader>
            <CardTitle>Welcome back, Loi</CardTitle>
            <CardDescription>Select your shop to continue.</CardDescription>
          </CardHeader>

          <Button className="mr-6" asChild>
            <Link href="/shop/question">Create Shop</Link>
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
