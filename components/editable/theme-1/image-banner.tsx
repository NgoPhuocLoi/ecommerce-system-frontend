import Link from "next/link";
import banner1 from "@/public/images/banner-1.svg";
import Image from "next/image";
import { useApplyRef } from "@/hooks/useApplyRef";

export const ImageBanner = () => {
  const { applyRef } = useApplyRef();
  return (
    <div className="bg-[#54bbcb] w-full flex justify-center py-14">
      <Image alt="banner" src={banner1} />
    </div>
  );
};
