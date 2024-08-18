import React from "react";
import BaseSetting, { IBaseSetting } from "./base-setting";

interface IColorSettingProps extends IBaseSetting<string> {
  onChange: (color: string) => void;
}

const ColorSetting = ({ value, onChange, ...rest }: IColorSettingProps) => {
  return (
    <BaseSetting value={value} {...rest}>
      <input
        type="color"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </BaseSetting>
  );
};

export default ColorSetting;
