import React, { useEffect } from "react";
import { Input } from "./input";
import { Search } from "lucide-react";
import { useDebounce } from "use-debounce";

interface ISearchInputProps {
  onValueChange: (value: string) => void;
  delay?: number;
}

const SearchInput = ({ onValueChange, delay = 500 }: ISearchInputProps) => {
  const [inputValue, setInputValue] = React.useState("");
  const [debouncedValue] = useDebounce(inputValue, delay);

  useEffect(() => {
    onValueChange(debouncedValue);
  }, [debouncedValue]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="relative">
      <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2" />
      <Input onChange={handleInputChange} className="pl-8" />
    </div>
  );
};

export default SearchInput;
