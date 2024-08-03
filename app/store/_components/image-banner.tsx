import Link from "next/link";
import banner1 from "@/static/images/banner-1.svg";
import Image from "next/image";

const ImageBanner = () => {
  return (
    <div className="bg-[#B1ABAB] w-full flex justify-center py-14">
      <Image alt="banner" src={banner1} />
    </div>
  );
};

export default ImageBanner;
