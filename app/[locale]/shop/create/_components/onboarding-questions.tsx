"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React, { useEffect, useMemo } from "react";
import CreateShopForm from "./create-store-form";
import { useRouter } from "next/navigation";

const NUMBER_OF_QUESTIONS = 5;

const OnboardingQuestions = () => {
  const [question, setQuestion] = React.useState(0);
  const router = useRouter();

  const percentageComplete = useMemo(() => {
    return Math.ceil((question * 100) / NUMBER_OF_QUESTIONS);
  }, [question]);

  useEffect(() => {
    if (question === NUMBER_OF_QUESTIONS) {
      router.push("/shop/create");
    }
  }, [question]);

  return (
    <>
      {question === NUMBER_OF_QUESTIONS ? (
        <></>
      ) : (
        // <CreateShopForm
        //   onBack={() => {
        //     if (question > 0) {
        //       setQuestion((prev) => prev - 1);
        //     }
        //   }}
        // />
        <div className="mx-auto h-screen w-2/3 bg-gray-50 py-12">
          <Card className="flex h-full flex-col">
            <CardHeader>
              <Progress className="mb-6" max={100} value={percentageComplete} />
              <CardTitle>
                Let’s get started. Which of these best describes you?
              </CardTitle>
              <CardDescription>
                We’ll help you get set up based on your business needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="bordered-radio-1"
                    className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default radio
                  </label>
                </div>
                <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
                  <input
                    id="bordered-radio-2"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="bordered-radio-2"
                    className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Checked state
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="ml-auto mt-auto flex gap-2">
                <Button variant={"ghost"}>Skip all</Button>
                <Button variant={"ghost"}>Skip</Button>
                <Button
                  onClick={() => {
                    if (question < NUMBER_OF_QUESTIONS) {
                      setQuestion((prev) => prev + 1);
                    }
                  }}
                >
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default OnboardingQuestions;
