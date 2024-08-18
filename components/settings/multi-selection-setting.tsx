import React from "react";
import BaseSetting, { IBaseSetting } from "./base-setting";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface IMultiSelectionSettingProps extends IBaseSetting<string> {
  selections: { title: string; value: string }[];
  onValueChange: (value: string) => void;
}

const MultiSelectionSetting = ({
  value,
  selections,
  onValueChange,
  ...rest
}: IMultiSelectionSettingProps) => {
  return (
    <BaseSetting value={value} {...rest}>
      <Select onValueChange={onValueChange} defaultValue={value}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select height" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {selections.map((selection) => (
              <SelectItem value={selection.value}>{selection.title}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </BaseSetting>
  );
};

export default MultiSelectionSetting;
