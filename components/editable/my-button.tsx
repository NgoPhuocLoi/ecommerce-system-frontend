import { useApplyRef } from "@/hooks/useApplyRef";
import { Button } from "../ui/button";
import { Resizable } from "re-resizable";

interface IMyButtonProps {
  label: string;
}

const MyButton = ({ label }: IMyButtonProps) => {
  return (
    <Button>{label}</Button>
    // <Resizable>
    //   <div ref={applyRef}>
    //     <Button>{label}</Button>
    //   </div>
    // </Resizable>
  );
};

export default MyButton;
