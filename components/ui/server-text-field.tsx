import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import clsx from "clsx";

interface IServerTextFieldProps {
  name: string;
  label: string;
  error?: string;
  id: string;
  placeholder?: string;
  type: string;
}

const ServerTextField = ({
  name,
  label,
  error,
  id,
  placeholder,
  type,
}: IServerTextFieldProps) => {
  return (
    <div>
      <div className="grid gap-1">
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          autoCapitalize="none"
          autoComplete={type}
          autoCorrect="off"
          className={clsx({
            "border-red-500": error,
          })}
        />
      </div>
      <span className="text-xs text-red-500">{error}</span>
    </div>
  );
};

export default ServerTextField;
