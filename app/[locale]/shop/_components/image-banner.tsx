import { Link } from "@/i18n/routing";
import banner1 from "@/public/images/banner-1.svg";
import Image from "next/image";

const ImageBanner = () => {
  return (
    <div className="flex w-full justify-center bg-[#B1ABAB] py-14">
      <Image alt="banner" src={banner1} />
    </div>
  );
};

export default ImageBanner;
