"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { links } from "../_constants";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname.startsWith(link.path);

        return (
          <Tooltip key={link.id}>
            <TooltipTrigger asChild>
              <Link
                href={link.path}
                className={clsx(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:text-black md:h-8 md:w-8",
                  {
                    "bg-black": isActive,
                  }
                )}
              >
                <link.iconComponent
                  color={isActive ? "white" : "black"}
                  className="h-5 w-5"
                />
                <span className="sr-only">{link.title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{link.title}</TooltipContent>
          </Tooltip>
        );
      })}
    </>
  );
};
