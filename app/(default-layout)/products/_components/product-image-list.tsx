"use client";
import { CloudinaryUploadWidgetInfo } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import UploadButton from "./upload-btn";

interface IProductImageListProps {
  shopId: string;
}

export interface UploadedContentPreview {
  publicId: string;
  url: string;
}

const ProductImageList = ({ shopId }: IProductImageListProps) => {
  const [uploadedImages, setUploadedImages] = useState<
    UploadedContentPreview[]
  >([]);
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {uploadedImages.map((previewContent) => (
          <button key={previewContent.publicId}>
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-contain"
              height="84"
              src={previewContent.url}
              width="84"
            />
          </button>
        ))}
        <UploadButton
          selectedImages={uploadedImages}
          onSelectExisting={(selectedImages) => {
            setUploadedImages(selectedImages);
          }}
          onSuccess={(result) => {
            const info = result.info as CloudinaryUploadWidgetInfo;
            setUploadedImages((prev) => [
              ...prev,
              {
                publicId: info.public_id,
                url: info.url,
              },
            ]);
          }}
          folder={shopId.replace(/-/g, "_") ?? ""}
        />
      </div>

      <input
        type="text"
        name="productImages"
        className="hidden"
        value={JSON.stringify(uploadedImages)}
        onChange={() => {}}
      />
    </>
  );
};

export default ProductImageList;
