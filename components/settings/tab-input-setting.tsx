import React from "react";
import BaseSetting, { IBaseSetting } from "./base-setting";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

interface ITabInputSettingProps
  extends IBaseSetting<{
    [key: string]: string;
  }> {
  values: { title: string; value: string }[];
  onValueChange: (value: { [key: string]: string }) => void;
}

const TabInputSetting = ({
  values,
  onValueChange,
  value,
  ...rest
}: ITabInputSettingProps) => {
  console.log({ value });
  return (
    <BaseSetting value={value} {...rest}>
      <div
        className="grid rounded-md"
        style={{
          gridTemplateColumns: `repeat(${values.length}, minmax(0, 1fr))`,
        }}
      >
        {values.map((v, index) => (
          <div key={index} className="flex flex-col gap-1">
            <input
              value={Number(value[v.value])}
              className="h-8 border text-center"
              type="number"
              onChange={(e) => {
                onValueChange({
                  ...value,
                  [v.value]: e.target.value,
                  isAllChanged: v.title === "All" ? "true" : "false",
                });
              }}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") {
                  (e.target as HTMLInputElement).value = "";
                }
              }}
            />
            <span className="text-center text-xs text-gray-400">{v.title}</span>
          </div>
        ))}
      </div>
    </BaseSetting>
  );
};

export default TabInputSetting;
