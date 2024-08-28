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
import { auth } from "@/auth";
import { getShops } from "@/actions/shops";
import { redirect } from "next/navigation";
import Link from "next/link";

interface Shop {
  id: string;
  name: string;
}

const ShopSelection = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const shops: Shop[] = await getShops(session.accessToken);
  console.log({ shops });
  return (
    <div className="flex h-screen w-screen items-center justify-center py-20">
      <Card className="h-full w-[476px]">
        <div className="flex items-center justify-between">
          <CardHeader>
            <CardTitle>Welcome back, Loi</CardTitle>
            <CardDescription>Select your shop to continue.</CardDescription>
          </CardHeader>

          <Button className="mr-6">New shop</Button>
        </div>
        <Separator />
        <CardContent>
          {/* <ScrollArea> */}
          <div className="flex flex-1 flex-col gap-1 overflow-auto py-3">
            {shops.map((shop) => (
              <Link
                href={"/dashboard"}
                key={shop.id}
                className="group flex cursor-pointer items-center gap-2 rounded-md p-3 duration-75 hover:bg-gray-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-green-400 text-xs">
                  {shop.name[0]}
                </div>

                <div className="duration-100 group-hover:translate-x-1">
                  <p className="text-sm font-bold">{shop.name}</p>
                  <p className="text-xs">test-store@gmail.com</p>
                </div>

                <div className="ml-auto hidden group-hover:block">
                  <ChevronRight />
                </div>
              </Link>
            ))}
          </div>
          {/* </ScrollArea> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShopSelection;
