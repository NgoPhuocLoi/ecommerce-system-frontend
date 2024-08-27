import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface ITextFieldProps {
  type: "text" | "email" | "password";
  value: string;
  onChange: (value: string) => void;
  label: string;
  id: string;
  placeholder?: string;
}

const TextField = ({
  type,
  value,
  onChange,
  id,
  label,
  placeholder,
}: ITextFieldProps) => {
  return (
    <div className="grid gap-1">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        autoCapitalize="none"
        autoComplete={type}
        autoCorrect="off"
      />
    </div>
  );
};

export default TextField;
