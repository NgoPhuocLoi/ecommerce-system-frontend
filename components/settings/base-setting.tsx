import React, { ReactNode } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Label } from "../ui/label";
import { CircleHelp } from "lucide-react";

export interface IBaseSetting<T> {
  id: string;
  title: string;
  value: T;
  description: string;
}

interface IBaseSettingProps extends IBaseSetting<any> {
  children: ReactNode;
  displayValueOnTop?: boolean;
}

const BaseSetting = ({
  id,
  title,
  description,
  value,
  displayValueOnTop = false,
  children,
}: IBaseSettingProps) => {
  return (
    <HoverCard openDelay={200}>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <Label htmlFor={id}>{title}</Label>
            <HoverCardTrigger asChild>
              <CircleHelp className="mt-auto" size={14} />
            </HoverCardTrigger>
          </div>
          {displayValueOnTop && (
            <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
              {value}
            </span>
          )}
        </div>
        {children}
      </div>
      <HoverCardContent
        align="start"
        className="relative w-[260px] text-sm z-10"
        side="top"
      >
        {description}
      </HoverCardContent>
    </HoverCard>
  );
};

export default BaseSetting;
