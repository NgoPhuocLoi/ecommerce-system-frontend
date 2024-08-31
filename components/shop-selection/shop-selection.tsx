import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ChevronRight } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { auth, updateSession } from "@/auth";
import { getShops } from "@/actions/shops";
import { redirect } from "next/navigation";
import Link from "next/link";
import { handleUpdateSession } from "@/actions/auth";
import ShopList from "./shop-list";

export interface Shop {
  id: string;
  name: string;
}

const ShopSelection = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const shops: Shop[] = await getShops(session.accessToken);

  return (
    <div className="flex h-screen w-screen items-center justify-center py-20">
      <Card className="h-full w-[476px]">
        <div className="flex items-center justify-between">
          <CardHeader>
            <CardTitle>Welcome back, Loi</CardTitle>
            <CardDescription>Select your shop to continue.</CardDescription>
          </CardHeader>

          <Button className="mr-6" asChild>
            <Link href="/shop/create">Create Shop</Link>
          </Button>
        </div>
        <Separator />
        <CardContent>
          {/* <ScrollArea> */}
          <ShopList shops={shops ?? []} />
          {/* </ScrollArea> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShopSelection;
