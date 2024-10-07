import React from "react";
import { Textarea } from "./textarea";
import { Label } from "./label";
import clsx from "clsx";

interface IServerTextAreaProps {
  name: string;
  label: string;
  error?: string;
  id: string;
  placeholder?: string;
  defaultValue?: string | number;
  disabled?: boolean;
}

const ServerTextArea = ({
  name,
  label,
  error,
  id,
  placeholder,

  defaultValue,
  disabled,
}: IServerTextAreaProps) => {
  return (
    <div>
      <div className="grid gap-3">
        <Label htmlFor={id}>{label}</Label>
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          autoCapitalize="none"
          autoCorrect="off"
          className={clsx({
            "border-red-500": error,
          })}
          defaultValue={defaultValue}
          disabled={disabled}
        />
      </div>
      <span className="text-xs text-red-500">{error}</span>
    </div>
  );
};

export default ServerTextArea;
