"use client";

import { getSubCategories } from "@/actions/categories";
import { Category } from "@/app/interfaces/category";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface ICategoryListProps {
  topLevelCategories: Category[];
}

const CategoryList = ({ topLevelCategories }: ICategoryListProps) => {
  const [displayedCategories, setDisplayedCategories] =
    useState<Category[]>(topLevelCategories);

  const handleLoadSubCategory = async (parentId: number) => {
    console.log({ parent });
    const res = (await getSubCategories(parentId)).metadata;
    console.log(setDisplayedCategories(res));
  };

  return (
    <div className="grid gap-3">
      <Label htmlFor="category">Category</Label>
      <Select>
        <SelectTrigger id="category" aria-label="Select category">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {displayedCategories.map((category) => (
            <div className="flex w-full items-center">
              <SelectItem
                className="hover:bg-gray-800"
                key={category.id}
                value={category.id + ""}
              >
                <div className="flex w-full items-center gap-2">
                  <span>{category.name}</span>
                </div>
              </SelectItem>
              {category.hasChild && (
                <div
                  onClick={() => {
                    handleLoadSubCategory(category.id);
                  }}
                  className="ml-10 cursor-pointer rounded-md p-2 hover:bg-gray-200"
                >
                  <ChevronRight size={16} className="ml-auto" />
                </div>
              )}
            </div>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryList;
