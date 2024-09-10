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
          <CardTitle className="text-xl">{t("cardTitle")}</CardTitle>
          <CardDescription>{t("cardDescription")}</CardDescription>
          <Badge className="w-fit" variant="outline">
            1/4 {t("completedProgressTitle")}
          </Badge>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full shadow-md">
            <AccordionItem value="item-1" className="bg-white px-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <SquareCheckBig size={16} />
                  <span>{t("setupSteps.step1.title")}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="pb-2">{t("setupSteps.step1.description")}</p>
                <div className="flex gap-2">
                  <Button size={"sm"}>
                    {t("setupSteps.step1.primaryButtonTitle")}
                  </Button>
                  <Button variant={"outline"} size={"sm"}>
                    {t("setupSteps.step1.secondaryButtonTitle")}
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white px-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Square size={16} />
                  <span>{t("setupSteps.step2.title")}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="pb-2">{t("setupSteps.step2.description")}</p>
                <div className="flex gap-2">
                  <Button size={"sm"}>
                    {t("setupSteps.step2.primaryButtonTitle")}
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white px-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Square size={16} />
                  <span>{t("setupSteps.step3.title")}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="pb-2">{t("setupSteps.step3.description")}</p>
                <div className="flex gap-2">
                  <Button size={"sm"}>
                    {t("setupSteps.step1.primaryButtonTitle")}
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white px-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Square size={16} />
                  <span>{t("setupSteps.step4.title")}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <p className="pb-2">{t("setupSteps.step4.description")}</p>
                <div className="flex gap-2">
                  <Button size={"sm"}>
                    {t("setupSteps.step4.primaryButtonTitle")}
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </main>
  );
}
