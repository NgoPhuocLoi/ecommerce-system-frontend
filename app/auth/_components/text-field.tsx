import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";
import React from "react";

interface ITextFieldProps {
  type: "text" | "email" | "password";
  value: string;
  onChange: (value: string) => void;
  label: string;
  id: string;
  placeholder?: string;
  error?: string;
  name?: string;
}

const TextField = ({
  type,
  value,
  onChange,
  id,
  label,
  placeholder,
  error,
  name,
}: ITextFieldProps) => {
  return (
    <div>
      <div className="grid gap-1">
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          value={value}
          name={name}
          onChange={(e) => {
            onChange(e.target.value);
          }}
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

export default TextField;
