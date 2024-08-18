import React from "react";
import BaseSetting, { IBaseSetting } from "./base-setting";
import { Input } from "../ui/input";

interface IInputSetting extends IBaseSetting<string> {
  onChange: (value: string) => void;
}

export const InputSetting = ({ onChange, value, ...rest }: IInputSetting) => {
  return (
    <BaseSetting value={value} {...rest}>
      <Input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </BaseSetting>
  );
};
