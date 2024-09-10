import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Square, SquareCheckBig } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Dashboard() {
  const t = useTranslations("DashBoard");
  return (
    <main className="container flex flex-col gap-4">
      <p className="font-bold">{t("title")}</p>

      <Card className="bg-gray-50 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Set up your shop now!</CardTitle>
          <CardDescription>
            Use this personalized guide to get your shop up and running.
          </CardDescription>
          <Badge className="w-fit" variant="outline">
            1/4 completed
          </Badge>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full shadow-md">
            <AccordionItem value="item-1" className="bg-white px-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <SquareCheckBig size={16} />
                  <span>Add your first product</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="pb-2">
                  Write a description, add photos, and set pricing for the
                  products you plan to sell.
                </p>
                <div className="flex gap-2">
                  <Button size={"sm"}>Add product</Button>
                  <Button variant={"outline"} size={"sm"}>
                    Import products
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white px-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Square size={16} />
                  <span>Cusomize your online shop</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="pb-2">
                  Choose a theme and add your logo, colors, and images to
                  reflect your brand.
                </p>
                <div className="flex gap-2">
                  <Button size={"sm"}>Customize</Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white px-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Square size={16} />
                  <span>Setup a payment provider </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="pb-2">
                  Choose a payment provider to start accepting payments.
                </p>
                <div className="flex gap-2">
                  <Button size={"sm"}>Set up Payment</Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white px-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Square size={16} />
                  <span>Place a test order</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="pb-2">
                  Make sure things are running smoothly by placing a test order
                  from your own store.
                </p>
                <div className="flex gap-2">
                  <Button size={"sm"}>Learn how to do</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </main>
  );
}
