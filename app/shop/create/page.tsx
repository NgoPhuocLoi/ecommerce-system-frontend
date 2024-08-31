import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import OnboardingQuestions from "./_components/onboarding-questions";

const Page = () => {
  return (
    <>
      <OnboardingQuestions />
    </>
  );
};

export default Page;
