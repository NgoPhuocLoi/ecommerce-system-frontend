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
    <div className="h-screen w-screen flex justify-center items-center py-20">
      <Card className="w-[476px] h-full">
        <div className="flex justify-between items-center">
          <CardHeader>
            <CardTitle>Welcome back, Loi</CardTitle>
            <CardDescription>Select your shop to continue.</CardDescription>
          </CardHeader>

          <Button className="mr-6">New shop</Button>
        </div>
        <Separator />
        <CardContent>
          {/* <ScrollArea> */}
          <div className="flex flex-col gap-1 py-3 overflow-auto flex-1">
            {shops.map((shop) => (
              <Link
                href={"/dashboard"}
                key={shop.id}
                className="p-3 group hover:bg-gray-100 flex gap-2 items-center rounded-md cursor-pointer duration-75"
              >
                <div className="w-10 h-10 rounded-md bg-green-400 text-xs flex justify-center items-center">
                  {shop.name[0]}
                </div>

                <div className="group-hover:translate-x-1 duration-100">
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
