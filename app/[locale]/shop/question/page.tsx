import React from "react";
import OnboardingQuestions from "../create/_components/onboarding-questions";
import { Category } from "@/app/interfaces/category";
import { getTopLevelCategories } from "@/actions/categories";

const Page = async () => {
  const topLevelCategories: Category[] = await getTopLevelCategories();
  return <OnboardingQuestions categories={topLevelCategories} />;
};

export default Page;
