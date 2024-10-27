import Image from "next/image";
import visa from "@/public/images/visa.svg";
import mastercard from "@/public/images/mastercard.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const StoreFooter = () => {
  return (
    <>
      <div className="py-9 flex flex-col items-center gap-4 border-b">
        <h2>Subscribe to our emails</h2>
        <div className="flex gap-4">
          <Input className="w-[360px]" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </div>

      <div className="py-9 flex justify-between px-10">
        <div className="flex gap-2 items-center">
          <Image src={visa} width={36} alt="visa" />
          <Image src={mastercard} width={36} alt="visa" />
        </div>

        <p> © 2024, test-store-nploi Powered by NgoPhuocLoi </p>
      </div>
    </>
  );
};

export default StoreFooter;
