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
import React from "react";

const OnboardingQuestions = () => {
  return (
    <div className="mx-auto h-screen w-2/3 py-12">
      <Card className="flex h-full flex-col">
        <CardHeader>
          <Progress className="mb-6" value={33} />
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
            <Button>Next</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OnboardingQuestions;
