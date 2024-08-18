import FileUploadSetting from "@/components/settings/file-upload-setting";
import MultiSelectionSetting from "@/components/settings/multi-selection-setting";
import banner1 from "@/public/images/banner-1.svg";
import { useNode } from "@craftjs/core";
import Image from "next/image";

const bannerHeightSelections = [
  {
    title: "Small",
    value: "420",
  },
  {
    title: "Medium",
    value: "560",
  },
  {
    title: "Large",
    value: "720",
  },
];

const ImageBannerSetting = () => {
  const {
    actions: { setProp },
    imageUrl,
    bannerHeight,
  } = useNode((node) => {
    return { ...node.data.props };
  });

  const handlePropChange = (key: string, value: any) => {
    setProp((prop: any) => (prop[key] = value));
  };
  return (
    <div className="flex flex-col gap-5 pt-1">
      <FileUploadSetting
        onFileChange={(url) => {
          handlePropChange("imageUrl", url);
        }}
        id="image-banner-file-upload"
        title="Upload Image"
        description="Click to upload your banner image"
        value={imageUrl}
      />
      <MultiSelectionSetting
        id="image-banner-image-size"
        title="Banner height"
        description="Change the banner height. For best results, use an image with a 3:2 aspect ratio"
        value={bannerHeight}
        onValueChange={(value) => {
          handlePropChange("bannerHeight", value);
        }}
        selections={bannerHeightSelections}
      />
    </div>
  );
};

interface IImageBannerProps {
  imageUrl?: string;
  bannerHeight?: string;
}

export const ImageBanner = ({ imageUrl, bannerHeight }: IImageBannerProps) => {
  return (
    <div
      style={{ height: bannerHeight + "px" }}
      className="bg-[#54bbcb] relative z-0 w-full flex justify-center py-14"
    >
      <Image fill alt="banner" src={imageUrl || banner1} />
    </div>
  );
};

ImageBanner.craft = {
  props: {
    imageUrl: "",
    bannerHeight: "420",
  },
  related: {
    setting: ImageBannerSetting,
  },
};
