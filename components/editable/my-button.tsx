import { useApplyRef } from "@/hooks/useApplyRef";
import { Button } from "../ui/button";

interface IMyButtonProps {
  label: string;
}

const MyButton = ({ label }: IMyButtonProps) => {
  const applyRef = useApplyRef();
  return (
    <div ref={applyRef}>
      <Button>{label}</Button>
    </div>
  );
};

export default MyButton;
