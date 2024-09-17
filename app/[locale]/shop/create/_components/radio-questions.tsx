import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

interface IRadioQuestionsProps {
  options: {
    label: string;
    value: string;
  }[];
  id: string;
  defaultValue: string;
  onValueChange: (value: string) => void;
}

const RadioQuestions = ({
  options,
  id,
  defaultValue,
  onValueChange,
}: IRadioQuestionsProps) => {
  return (
    <RadioGroup
      onValueChange={onValueChange}
      className="grid grid-cols-2 gap-4"
      defaultValue={defaultValue}
    >
      {options.map((option) => (
        <div
          key={option.value}
          onClick={(e) => {
            const target = e.target as HTMLDivElement;
            const label = target.lastElementChild as HTMLLabelElement;
            if (label && label.click) {
              label.click();
            }
          }}
          className="flex cursor-pointer items-center gap-3 rounded-md border p-4"
        >
          <RadioGroupItem value={option.value} id={`${id}-${option.value}`} />
          <Label htmlFor={`${id}-${option.value}`}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioQuestions;
